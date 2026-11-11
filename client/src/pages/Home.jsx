import { Link } from "react-router-dom";
import { FiArrowDown,FiArrowUpRight,FiGithub,FiLinkedin,FiMail,FiFileText } from "react-icons/fi";
import { profile,projects,technologies } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";
import TechGrid from "../components/TechGrid.jsx";
const API_URL = import.meta.env.VITE_API_URL;

export default function Home(){
 return <div className="wrap">
  <section className="hero">
   <div className="hero-copy">
    <p className="eyebrow"><span className="pulse"></span>{profile.role}</p>
    <h1>{profile.headline.split("\n").map((s,i)=><span key={i}>{s} </span>)}</h1>
    <p className="intro">{profile.intro}</p>
    <div className="actions">

     <a className="button button-primary" href={`${API_URL}/api/resume/view`} target="_blank" rel="noreferrer"><FiFileText/> View resume <FiArrowUpRight/></a>
     
     <a className="button" href={profile.github} target="_blank" rel="noreferrer"><FiGithub/> GitHub <FiArrowUpRight/></a>
     <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn <FiArrowUpRight/></a>
     <a className="button button-icon" href={`mailto:${profile.email}`} aria-label="Email Aman"><FiMail/> Email</a>
    </div>
    <div className="hero-foot"><span>BASED IN INDIA</span><span>OPEN TO AI/ML & SOFTWARE ENGINEERING OPPORTUNITIES</span></div>
   </div>
   <div className="portrait-wrap"><div className="portrait-orbit"></div><div className="portrait-frame"><img src="/profile.png" alt="Portrait of Aman Singh Patel"/></div><div className="portrait-caption"><span>AMAN SINGH PATEL</span><span>AI / ML · BACKEND</span></div></div>
  </section>
  <section className="section" id="projects"><div className="section-head"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Projects built around<br/>real problems.</h2></div><Link className="text-link" to="/projects">View all projects <FiArrowUpRight/></Link></div>
   <div className="project-grid">{projects.map(p=><ProjectCard key={p.number} project={p}/>)}</div>
  </section>
  <section className="section toolkit"><div className="section-head"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Tech I’ve worked with.</h2></div><p className="section-note">Technologies and tools listed in my resume.</p></div><TechGrid items={technologies}/></section>
  <section className="contact-strip"><div><p className="eyebrow">03 / GET IN TOUCH</p><h2>Have a problem<br/>worth solving?</h2></div><div className="contact-right"><p>For opportunities, collaboration or a technical conversation, reach out directly.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<FiArrowUpRight/></a><Link to="/contact" className="text-link">Contact details <FiArrowUpRight/></Link></div></section>
 </div>;
}
