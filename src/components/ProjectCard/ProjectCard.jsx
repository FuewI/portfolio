import { motion } from "framer-motion";
import { getSkillMeta } from "../../data/skills";
import { GithubIcon, ArrowIcon } from "../icons/Icons";
import { useApp } from "../../hooks/useApp";
import "./ProjectCard.css";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ project }) {
  const { t } = useApp();
  const { name, description, image, stack, link, repo } = project;

  return (
    <motion.div className="project-card" variants={item} whileHover={{ y: -8 }}>
      {image && (
        <div className="project-card-image">
          <img src={image} alt={name} loading="lazy" />
        </div>
      )}

      <div className="project-card-body">
        <h3>{name}</h3>
        <p>{description}</p>

        {stack && stack.length > 0 && (
          <div className="project-card-stack">
            {stack.map((tech) => {
              const meta = getSkillMeta(tech);
              return (
                <span className="tech-badge" key={tech}>
                  {meta && <meta.Icon style={{ color: meta.color }} />}
                  {tech}
                </span>
              );
            })}
          </div>
        )}

        <div className="project-card-links">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
              {t.projects.live} <ArrowIcon />
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
              <GithubIcon /> {t.projects.code}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
