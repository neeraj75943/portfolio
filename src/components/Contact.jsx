import { useState } from "react";
import { contactEndpoint, socialLinks } from "../config/siteConfig";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

export default function Contact(){
   const [form, setForm] = useState(initialForm);
   const [errors, setErrors] = useState({});
   const [status, setStatus] = useState({ type: "", message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);

   function validateForm() {
      const nextErrors = {};
      if (!form.name.trim()) nextErrors.name = "Please enter your name.";
      if (!form.email.trim()) nextErrors.email = "Please enter your email.";
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
      if (!form.message.trim()) nextErrors.message = "Please enter a message.";
      else if (form.message.trim().length < 10) nextErrors.message = "Please enter at least 10 characters.";
      return nextErrors;
   }

   function updateField(event) {
      const { name, value } = event.target;
      setForm((current) => ({ ...current, [name]: value }));
      setErrors((current) => ({ ...current, [name]: "" }));
      setStatus({ type: "", message: "" });
   }

   async function handleSubmit(event) {
      event.preventDefault();
      const nextErrors = validateForm();
      if (Object.keys(nextErrors).length) {
         setErrors(nextErrors);
         setStatus({ type: "error", message: "Please correct the highlighted fields." });
         return;
      }
      if (!contactEndpoint) {
         setStatus({ type: "error", message: "This form is ready, but message delivery needs a configured email service." });
         return;
      }
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });
      try {
         const response = await fetch(contactEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
         const result = await response.json().catch(() => ({}));
         if (!response.ok) throw new Error(result.message || "Unable to send your message right now. Please try again later.");
         setForm(initialForm);
         setErrors({});
         setStatus({ type: "success", message: "Message sent successfully!" });
      } catch (error) {
         setStatus({ type: "error", message: error.message || "Message could not be sent. Please try again." });
      } finally {
         setIsSubmitting(false);
      }
   }

    return(
      <section id="contact" className="contact">
         <div className="headingcontact">
            <h1>Contact Me</h1>
         </div>
         <div className="headingh3contact">
            <h3>Please fill out the form below to discuss any work opportunities.</h3>
         </div>
               <div className="contact-layout">
                <div className="contact-copy"><h2>Get In Touch</h2><p>Have an opportunity or project in mind? I&apos;d be glad to hear from you.</p><div className="contact-details"><a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a><a href="tel:+919628038142">+91-9628038142</a><span>Azamgarh, Uttar Pradesh, India</span></div></div>
               <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Your Name" className="input1" autoComplete="name" maxLength="100" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required />
                  {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
            <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" className="input2" autoComplete="email" maxLength="254" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required />
                  {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
            <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Your Message" rows="5" maxLength="5000" className="textarea" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} required></textarea>
                  {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
                  <button className="submitbtn" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</button>
                  {status.message && <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}
         </form>
             </div>
         </section>
    )
}
