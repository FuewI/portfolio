import { motion } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import "./About.css";

function About() {
  const { t } = useApp();

  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {t.about.title}
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {t.about.text}
      </motion.p>
    </section>
  );
}

export default About;
