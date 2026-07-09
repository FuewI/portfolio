import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiResponsive,
  DiPython,
  DiDjango,
  DiPostgresql,
  DiSqllite,
  DiGit,
  DiGithub,
  DiDocker,
} from "react-icons/di";
import { SiVite, SiTailwindcss, SiJson } from "react-icons/si";
import { TbApi, TbSitemap } from "react-icons/tb";

// category matches a key in translations.skillGroups
export const SKILLS = [
  { name: "HTML5", category: "frontend", Icon: DiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "frontend", Icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", category: "frontend", Icon: DiJavascript, color: "#F7DF1E" },
  { name: "React", category: "frontend", Icon: DiReact, color: "#61DAFB" },
  { name: "Vite", category: "frontend", Icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", category: "frontend", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Responsive Design", category: "frontend", Icon: DiResponsive, color: "#38BDF8" },
  { name: "Python", category: "backend", Icon: DiPython, color: "#3776AB" },
  { name: "Django", category: "backend", Icon: DiDjango, color: "#44B78B" },
  { name: "Django REST Framework", category: "backend", Icon: DiDjango, color: "#44B78B" },
  { name: "REST APIs", category: "backend", Icon: TbApi, color: "#7C5CFF" },
  { name: "JSON", category: "backend", Icon: SiJson, color: "#AAB4C8" },
  { name: "PostgreSQL", category: "data", Icon: DiPostgresql, color: "#4169E1" },
  { name: "SQLite", category: "data", Icon: DiSqllite, color: "#2F80ED" },
  { name: "Git", category: "tools", Icon: DiGit, color: "#F05032" },
  { name: "GitHub", category: "tools", Icon: DiGithub, color: "#AAB4C8" },
  { name: "Docker", category: "tools", Icon: DiDocker, color: "#2496ED" },
  { name: "BPMN", category: "tools", Icon: TbSitemap, color: "#7C5CFF" },
];

export function getSkillMeta(name) {
  return SKILLS.find((s) => s.name === name);
}
