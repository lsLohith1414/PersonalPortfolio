import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initEmailJS } from "./lib/emailjs";

// Initialize EmailJS for contact form
initEmailJS();

createRoot(document.getElementById("root")!).render(<App />);
