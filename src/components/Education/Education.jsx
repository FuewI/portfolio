import { motion } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { EDUCATION } from "../../data/education";
import EducationCard from "../EducationCard/EducationCard";
import "./Education.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {t.education.title}
      </motion.h2>

      {EDUCATION.length > 0 ? (
        <motion.div
          className="education-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {EDUCATION.map((edu) => (
            <EducationCard key={`${edu.school}-${edu.degree}`} education={edu} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>{t.education.empty}</p>
        </motion.div>
      )}
    </section>
  );
}

export default Education;
