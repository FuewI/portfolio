import { motion } from "framer-motion";
import { DiReact, DiPython, DiDjango, DiPostgresql, DiDocker, DiGit } from "react-icons/di";
import { useApp } from "../../hooks/useApp";
import { GithubIcon, MailIcon, ArrowIcon } from "../icons/Icons";
import "./Hero.css";

const NAME = "Ivan Dimitrov";
const EMAIL = "ivan.dimitrov2388@outlook.com";
const GITHUB_URL = "https://github.com/FuewI";

const FLOATING_ICONS = [
  { Icon: DiReact, color: "#61DAFB", style: { top: "4%", left: "6%" }, duration: 5.5, delay: 0 },
  { Icon: DiPython, color: "#3776AB", style: { top: "12%", right: "2%" }, duration: 6.5, delay: 0.4 },
  { Icon: DiDjango, color: "#44B78B", style: { top: "46%", left: "-4%" }, duration: 5, delay: 0.8 },
  { Icon: DiPostgresql, color: "#4169E1", style: { bottom: "16%", right: "4%" }, duration: 6, delay: 0.2 },
  { Icon: DiDocker, color: "#2496ED", style: { bottom: "2%", left: "16%" }, duration: 5.8, delay: 0.6 },
  { Icon: DiGit, color: "#F05032", style: { top: "34%", right: "22%" }, duration: 6.2, delay: 1 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 },
  }),
};

function Hero() {
  const { t } = useApp();

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <motion.div className="hero-copy" initial="hidden" animate="show">
        <motion.span className="badge" custom={0} variants={fadeUp}>
          <span className="badge-dot" />
          {t.badge}
        </motion.span>

        <motion.h1 custom={1} variants={fadeUp}>
          {t.hero.role}
          <br />
          <span className="gradient-text">{t.hero.headingLine2}</span>
        </motion.h1>

        <motion.p className="subtitle" custom={2} variants={fadeUp}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div className="button-row" custom={3} variants={fadeUp}>
          <a href="#projects" className="btn btn-primary">
            {t.hero.viewProjects}
            <ArrowIcon className="btn-arrow" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.contactMe}
          </a>
        </motion.div>

        <motion.div className="social-row" custom={4} variants={fadeUp}>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label={t.aria.github}>
            <GithubIcon />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label={t.aria.email}>
            <MailIcon />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-graphic"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        aria-hidden="true"
      >
        <div className="hero-orb" />

        <div className="hero-terminal">
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">$</span> whoami
            </p>
            <p className="output">{NAME}</p>
            <p>
              <span className="prompt">$</span> stack
            </p>
            <p className="output">React &middot; Django &middot; PostgreSQL</p>
            <p>
              <span className="prompt">$</span> status
            </p>
            <p className="output output-accent">
              {t.badge}
              <span className="cursor" />
            </p>
          </div>
        </div>

        {FLOATING_ICONS.map(({ Icon, color, style, duration, delay }, i) => (
          <motion.div
            key={i}
            className="float-card"
            style={style}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon style={{ color }} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
