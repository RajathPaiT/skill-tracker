"use client";

import Link from "next/link";
import { useSkill } from "../../context/SkillContext";
import { Sidebar } from "../../components/Sidebar";

export default function DashboardPage() {
  const { skills, goals, completedGoals, totalProgress, toggleGoal } = useSkill();
  const firstName = "Alex";
  const nextGoal = goals.find((goal) => !completedGoals.includes(goal.id));

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div><span className="eyebrow">SUNDAY, OCTOBER 11, 2026</span><h1>Good morning, {firstName} <span className="wave">✳</span></h1><p>Keep showing up. Your future self will thank you.</p></div>
          <Link href="/skills" className="button button-dark">+ Add a skill</Link>
        </header>
        <section className="stat-grid">
          <article className="stat-card"><div className="stat-top"><span>Total skills</span><span className="stat-icon lavender">◇</span></div><strong>{skills.length.toString().padStart(2,"0")}</strong><small><span className="positive">↗ Growing</span> your skill set</small></article>
          <article className="stat-card"><div className="stat-top"><span>Overall progress</span><span className="stat-icon mint">↗</span></div><strong>{totalProgress}%</strong><div className="progress-track"><i style={{width:`${totalProgress}%`}}/></div><small>Across all tracked skills</small></article>
          <article className="stat-card"><div className="stat-top"><span>Goals completed</span><span className="stat-icon peach">✓</span></div><strong>{completedGoals.length}<span className="stat-muted">/{goals.length}</span></strong><small>Every small win matters</small></article>
        </section>
        <div className="dashboard-columns">
          <section className="panel skills-panel"><div className="panel-heading"><div><h2>Your skills</h2><p>Keep an eye on your learning journey.</p></div><Link href="/skills" className="text-link">View all →</Link></div>
            <div className="skill-list">{skills.slice(0,4).map((skill)=><div className="skill-row" key={skill.id}><div className={`skill-icon ${skill.color}`}>{skill.short}</div><div className="skill-row-main"><div className="skill-row-title"><b>{skill.name}</b><span>{skill.level}</span></div><div className="progress-track"><i style={{width:`${skill.progress}%`}}/></div></div><strong className="skill-value">{skill.progress}%</strong></div>)}</div>
          </section>
          <section className="panel goals-panel"><div className="panel-heading"><div><h2>Today's focus</h2><p>A few steps make a big difference.</p></div><span className="round-icon">☼</span></div>
            <div className="goal-list">{goals.slice(0,4).map((goal)=><label className={`goal-row ${completedGoals.includes(goal.id)?"goal-done":""}`} key={goal.id}><input type="checkbox" checked={completedGoals.includes(goal.id)} onChange={()=>toggleGoal(goal.id)}/><span className="custom-check">✓</span><span className="goal-copy"><b>{goal.title}</b><small>{goal.category}</small></span></label>)}</div>
            {nextGoal && <div className="focus-tip"><span>✦</span><p><b>One step at a time</b><br/>Your next focus: {nextGoal.title}</p></div>}
          </section>
        </div>
        <section className="bottom-banner"><div className="banner-spark">✳</div><div><h2>Progress over perfection.</h2><p>You don't have to learn everything today. Just keep learning something.</p></div><Link href="/goals" className="button button-light">Explore your goals →</Link></section>
        <footer className="dashboard-footer">SkillTrack · Your personal learning space</footer>
      </main>
    </div>
  );
}
