import { FiArrowUpRight } from "react-icons/fi";
export default function ProjectCard({project}) {
 return <article className="project-card">
  <div className="project-top"><span className="mono">{project.number} / PROJECT</span><span className="project-date">{project.date}</span></div>
  <h3>{project.title}</h3>
  <ul>{project.description.map((line,i)=><li key={i}>{line}</li>)}</ul>
  <div className="tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
 </article>;
}
