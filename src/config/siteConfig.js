export const socialLinks = {
    linkedin: "https://linkedin.com/in/neeraj-prajapati-996964276",
    instagram: "https://www.instagram.com/neeraj_prajapati9628/",
    github: "https://github.com/neeraj75943",
    email: "neeraj7522prajapati@gmail.com",
};

export const resumePath = "/resume/Neeraj-Prajapati-Resume.pdf";

// This is a public URL only. Secrets remain in the backend .env file.
const apiBaseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
export const contactEndpoint = `${apiBaseUrl}/api/contact`;
