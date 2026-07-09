import { motion } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { MailIcon, GithubIcon } from "../icons/Icons";
import "./Contact.css";

const EMAIL = "ivan.dimitrov2388@outlook.com";
const GITHUB_URL = "https://github.com/FuewI";

function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {t.contact.title}
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        {t.contact.subtitle}
      </motion.p>

      <motion.div
        className="button-row centered"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
      >
        <a href={`mailto:${EMAIL}`} className="btn btn-primary">
          <MailIcon /> {EMAIL}
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
          <GithubIcon /> {t.contact.githubLabel}
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
