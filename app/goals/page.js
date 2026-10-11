"use client";

import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { useSkill } from "../../context/SkillContext";

export default function GoalsPage() {
  const { goals, completedGoals, toggleGoal, addGoal } = useSkill();
  const [title,setTitle] = useState("");
  const [category,setCategory] = useState("Learning");
  const [message,setMessage] = useState("");

  function submitGoal(event) {
    event.preventDefault();
    if (!title.trim()) return;
    addGoal({title:title.trim(),category});
    setTitle(""); setMessage("Your new goal is ready."); 
  }

  return <div className="app-shell"><Sidebar /><main className="dashboard-main">
    <header className="dashboard-header"><div><span className="eyebrow">SMALL STEPS, BIG GROWTH</span><h1>Learning goals</h1><p>Make your next step clear and achievable.</p></div></header>
    {message && <p className="notice">{message}</p>}
    <section className="panel form-panel"><h2>Create a goal</h2><form className="goal-form" onSubmit={submitGoal}><label>What do you want to achieve?<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Practise JavaScript for 20 minutes" required /></label><label>Goal type<select value={category} onChange={e=>setCategory(e.target.value)}><option>Learning</option><option>Practice</option><option>Project</option><option>Career</option></select></label><button className="button button-dark" type="submit">+ Add goal</button></form></section>
    <section className="panel goals-full-panel"><div className="panel-heading"><div><h2>Your goals</h2><p>{completedGoals.length} of {goals.length} completed</p></div><span className="completion-badge">{goals.length ? Math.round(completedGoals.length/goals.length*100):0}% done</span></div><div className="goal-list">{goals.map(goal=><label className={`goal-row ${completedGoals.includes(goal.id)?"goal-done":""}`} key={goal.id}><input type="checkbox" checked={completedGoals.includes(goal.id)} onChange={()=>toggleGoal(goal.id)}/><span className="custom-check">✓</span><span className="goal-copy"><b>{goal.title}</b><small>{goal.category}</small></span><span className="goal-state">{completedGoals.includes(goal.id)?"Completed":"In progress"}</span></label>)}</div></section>
    <footer className="dashboard-footer">SkillTrack · Your personal learning space</footer>
  </main></div>;
}
