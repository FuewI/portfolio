import { motion } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { SKILLS } from "../../data/skills";
import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {t.skills.title}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        {t.skills.subtitle}
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} categoryLabel={t.skillGroups[skill.category]} />
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
