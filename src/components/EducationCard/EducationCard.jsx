import { motion } from "framer-motion";
import "./EducationCard.css";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function EducationCard({ education }) {
  const { school, degree, period, description } = education;

  return (
    <motion.div className="education-card" variants={item} whileHover={{ y: -4 }}>
      <span className="education-card-period">{period}</span>
      <h3>{degree}</h3>
      <p className="education-card-school">{school}</p>
      {description && <p className="education-card-desc">{description}</p>}
    </motion.div>
  );
}

export default EducationCard;
