import { motion } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { PROJECTS } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ArrowIcon } from "../icons/Icons";
import "./Projects.css";

const GITHUB_URL = "https://github.com/FuewI";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {t.projects.title}
      </motion.h2>

      {PROJECTS.length > 0 ? (
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
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
          <p>{t.projects.empty}</p>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
            {t.projects.viewGithub} <ArrowIcon />
          </a>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
