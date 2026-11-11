import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  const links = [["/", "Home"], ["/projects", "Projects"], ["/contact", "Contact"]];
  return <header className="topbar"><nav className="nav">
    <Link to="/" className="brand">ASP<span>.</span></Link>
    <div className="nav-links">{links.map(([to,label]) => <NavLink key={to} to={to} end={to==="/"}>{label}</NavLink>)}</div>
    <a className="nav-cta" href="/api/resume/view" target="_blank" rel="noreferrer">Resume <FiArrowUpRight /></a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<FiX/>:<FiMenu/>}</button>
    {open && <div className="mobile-menu">{links.map(([to,label])=><NavLink key={to} to={to} end={to==="/"}>{label}</NavLink>)}<a href="/api/resume/view" target="_blank" rel="noreferrer">View resume</a></div>}
  </nav></header>;
}
export default function App() {
 return <><a className="skip" href="#main">Skip to content</a><Navigation/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><footer className="footer"><span>© {new Date().getFullYear()} Aman Singh Patel</span><span>AI / ML · RAG · Agentic Systems</span></footer></>;
}
