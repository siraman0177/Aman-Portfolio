import {
  SiPython, SiPytorch, SiScikitlearn, SiNumpy, SiPandas,
  SiLangchain, SiHuggingface, SiFastapi, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiJupyter, SiGooglecolab, SiOllama, SiQdrant
} from "react-icons/si";
import { FiCode,FiDatabase,FiGitBranch,FiCpu,FiLayers,FiShield,FiLock,FiSearch,FiGlobe,FiServer } from "react-icons/fi";
const icons={python:SiPython,code:FiCode,database:FiDatabase,pytorch:SiPytorch,brain:SiScikitlearn,numpy:SiNumpy,pandas:SiPandas,chain:SiLangchain,workflow:FiGitBranch,huggingface:SiHuggingface,fastapi:SiFastapi,postgres:SiPostgresql,search:FiSearch,cpu:SiOllama,network:FiGlobe,git:SiGit,github:SiGithub,notebook:SiJupyter,colab:SiGooglecolab,shield:FiShield,api:FiServer,lock:FiLock};
export default function TechGrid({items}) { return <div className="tech-grid">{items.map(([name,key])=>{const Icon=icons[key]||FiLayers;return <div className="tech-item" key={name}><Icon/><span>{name}</span></div>})}</div>; }
