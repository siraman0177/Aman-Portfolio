import {projects} from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";
export default function Projects(){return <div className="wrap page"><p className="eyebrow">01 / PROJECTS</p><h1 className="page-title">Selected engineering work.</h1><p className="page-intro">Three projects described using the details in my resume.</p><div className="project-grid">{projects.map(p=><ProjectCard key={p.number} project={p}/>)}</div></div>}
