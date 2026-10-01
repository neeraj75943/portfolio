import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "./models/Contact.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
const allowedOrigins = (process.env.CLIENT_ORIGIN || defaultOrigins.join(","))
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function sanitizeText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value
    .normalize("NFKC")
    .replace(/\0/g, "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character]);
}

function createMailer() {
  const requiredSettings = ["MAIL_HOST", "MAIL_USER", "MAIL_PASS", "MAIL_FROM", "NOTIFICATION_EMAIL"];
  if (!requiredSettings.every((setting) => process.env[setting])) return null;

  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: process.env.MAIL_SECURE === "true",
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });
}

const mailer = createMailer();
app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("This origin is not allowed to call the API."));
  },
  methods: ["POST"],
}));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Too many messages sent. Please try again in 15 minutes." },
});

app.get("/api/health", (_request, response) => {
  response.json({ ok: mongoose.connection.readyState === 1 });
});

app.post("/api/contact", contactLimiter, async (request, response, next) => {
  try {
    const name = sanitizeText(request.body?.name, 100);
    const email = sanitizeText(request.body?.email, 254).toLowerCase();
    const message = sanitizeText(request.body?.message, 5000);

    if (!name || name.length < 2) return response.status(400).json({ message: "Please enter a valid name." });
    if (!emailPattern.test(email)) return response.status(400).json({ message: "Please enter a valid email address." });
    if (!message || message.length < 10) return response.status(400).json({ message: "Please enter a message with at least 10 characters." });

    const contact = await Contact.create({ name, email, message });

    if (mailer) {
      const submittedAt = contact.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      try {
        await mailer.sendMail({
          from: process.env.MAIL_FROM,
          to: process.env.NOTIFICATION_EMAIL,
          replyTo: email,
          subject: `Portfolio contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\nMessage:\n${message}`,
          html: `<h2>New portfolio contact</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p><p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
        });
      } catch (mailError) {
        console.error("Contact saved, but notification email failed:", mailError.message);
      }
    }

    return response.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _request, response, _next) => {
  void _next;
  console.error(error);
  if (error instanceof SyntaxError && "body" in error) return response.status(400).json({ message: "Invalid request body." });
  return response.status(500).json({ message: "Unable to send your message right now. Please try again later." });
});

async function startServer() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required. Add it to your .env file.");
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => console.log(`Contact API running at http://localhost:${port}`));
}

startServer().catch((error) => {
  console.error("Unable to start the contact API:", error.message);
  process.exitCode = 1;
});
