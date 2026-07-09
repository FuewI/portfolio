import { motion } from "framer-motion";
import "./SkillCard.css";

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SkillCard({ skill, categoryLabel }) {
  const { Icon, name, color } = skill;

  return (
    <motion.div className="skill-card" variants={item} whileHover={{ y: -6 }} style={{ "--glow-color": color }}>
      <div className="skill-card-glow" aria-hidden="true" />
      <Icon className="skill-card-icon" style={{ color }} />
      <span className="skill-card-name">{name}</span>
      <span className="skill-card-category">{categoryLabel}</span>
    </motion.div>
  );
}

export default SkillCard;
