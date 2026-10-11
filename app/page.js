import Link from "next/link";
import { Icon } from "../components/Icon";

const features = [
  { icon: "◷", title: "Track your progress", text: "See your skill levels and understand how far you have come." },
  { icon: "◎", title: "Set clear goals", text: "Turn big learning ambitions into smaller, achievable targets." },
  { icon: "↗", title: "Stay consistent", text: "Keep your learning organized in one simple dashboard." }
];

export default function HomePage() {
  return (
    <main className="landing">
      <nav className="topbar landing-nav">
        <Link href="/" className="brand"><span className="brand-mark">S</span> SkillTrack</Link>
        <div className="nav-actions">
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/dashboard" className="button button-dark">Get started <span>↗</span></Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> YOUR LEARNING, ORGANIZED</div>
          <h1>Build skills.<br /><span>Build your future.</span></h1>
          <p className="hero-description">A calmer, clearer way for students to track skills, set learning goals, and celebrate progress — one step at a time.</p>
          <div className="hero-actions">
            <Link href="/dashboard" className="button button-dark button-large">Explore dashboard <span>→</span></Link>
            <a href="#features" className="button button-light button-large">See how it works</a>
          </div>
          <div className="hero-note"><span className="avatar-stack"><i>R</i><i>A</i><i>S</i></span><span>Made for curious students who keep growing.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="preview-card">
            <div className="preview-top"><div><span className="tiny-label">YOUR OVERVIEW</span><h3>Learning snapshot</h3></div><span className="round-icon">↗</span></div>
            <div className="progress-summary"><div><strong>68<span>%</span></strong><p>Overall progress</p></div><div className="ring"><div><b>68%</b><small>complete</small></div></div></div>
            <div className="mini-chart"><div className="chart-label"><span>Weekly activity</span><b>+12.4%</b></div><div className="bars">{[28,42,35,58,48,75,63,90,68,82,72,100].map((h,i)=><i key={i} style={{height:`${h}%`}} className={i===11?"bar-active":""}/>)}</div><div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
            <div className="preview-skill"><div className="skill-icon purple">JS</div><div className="skill-info"><b>JavaScript</b><span>Intermediate</span></div><div className="skill-percent">72%</div></div>
            <div className="preview-skill"><div className="skill-icon orange">UI</div><div className="skill-info"><b>UI Design</b><span>Beginner</span></div><div className="skill-percent">45%</div></div>
          </div>
          <div className="floating-tag"><span>✦</span> Small steps count</div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading"><div className="eyebrow">A BETTER WAY TO LEARN</div><h2>Your growth, at a glance.</h2><p>Everything you need to stay focused on what matters next.</p></div>
        <div className="feature-grid">{features.map((feature)=><article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>
      <footer className="footer"><Link href="/" className="brand"><span className="brand-mark">S</span> SkillTrack</Link><span>Designed for progress, not perfection.</span><span>© 2026 SkillTrack</span></footer>
    </main>
  );
}
