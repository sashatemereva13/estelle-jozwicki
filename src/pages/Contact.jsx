import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrk7bqa",
        "template_103076o",
        form.current,
        "yPf1bo176wiTAvCu8",
      )
      .then(
        () => {
          alert("Message sent successfully ✨");
        },
        (error) => {
          console.log(error);
          alert("Something went wrong.");
        },
      );
  };

  return (
    <section className="page narrow">
      <h2>{t("contact.title")}</h2>

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input name="user_name" placeholder={t("contact.name")} required />
        <input name="user_email" placeholder={t("contact.email")} required />
        <textarea name="message" placeholder={t("contact.message")} required />
        <button type="submit">{t("contact.send")}</button>
      </form>
    </section>
  );
}
