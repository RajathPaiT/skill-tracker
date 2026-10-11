"use client";

import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { useSkill } from "../../context/SkillContext";

export default function SkillsPage() {
  const { skills, addSkill } = useSkill();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Development");
  const [level, setLevel] = useState("Beginner");
  const [progress, setProgress] = useState("25");
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) { setMessage("Please enter a skill name."); return; }
    addSkill({ name: name.trim(), category, level, progress: Number(progress) });
    setName(""); setProgress("25"); setLevel("Beginner"); setCategory("Development");
    setMessage("Skill added successfully."); setShowForm(false);
  }

  return <div className="app-shell"><Sidebar /><main className="dashboard-main">
    <header className="dashboard-header"><div><span className="eyebrow">YOUR LEARNING LIBRARY</span><h1>My skills</h1><p>Every skill starts with a first step.</p></div><button className="button button-dark" onClick={()=>{setShowForm(!showForm);setMessage("");}}>{showForm?"Cancel":"+ Add a skill"}</button></header>
    {message && <p className="notice">{message}</p>}
    {showForm && <section className="panel form-panel"><h2>Add a new skill</h2><form onSubmit={handleSubmit} className="skill-form"><label>Skill name<input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Public speaking" required /></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>Development</option><option>Design</option><option>Communication</option><option>Business</option><option>Other</option></select></label><label>Current level<select value={level} onChange={e=>setLevel(e.target.value)}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label>Progress: {progress}%<input type="range" min="0" max="100" value={progress} onChange={e=>setProgress(e.target.value)} /></label><button className="button button-dark" type="submit">Save skill</button></form></section>}
    <section className="skills-page-grid">{skills.map(skill=><article className="panel skill-detail-card" key={skill.id}><div className={`skill-icon ${skill.color}`}>{skill.short}</div><span className="category-pill">{skill.category}</span><h2>{skill.name}</h2><p>{skill.level} level</p><div className="detail-progress-label"><span>Progress</span><b>{skill.progress}%</b></div><div className="progress-track"><i style={{width:`${skill.progress}%`}}/></div><div className="skill-card-foot"><span>Keep practising</span><span>↗</span></div></article>)}</section>
    <footer className="dashboard-footer">SkillTrack · Your personal learning space</footer>
  </main></div>;
}
