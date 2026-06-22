import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;