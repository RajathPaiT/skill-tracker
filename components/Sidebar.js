"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Overview", icon: "▦" },
  { href: "/skills", label: "My skills", icon: "◇" },
  { href: "/goals", label: "Learning goals", icon: "◎" }
];

export function Sidebar() {
  const pathname = usePathname();
  return <aside className="sidebar">
    <Link href="/" className="brand"><span className="brand-mark">S</span><span>SkillTrack</span></Link>
    <div className="side-label">WORKSPACE</div>
    <nav className="side-nav">{links.map(link=><Link key={link.href} href={link.href} className={`side-link ${pathname===link.href?"side-link-active":""}`}><span className="side-icon">{link.icon}</span>{link.label}{pathname===link.href&&<span className="active-marker"/>}</Link>)}</nav>
    <div className="sidebar-bottom"><div className="help-card"><div className="help-icon">✦</div><b>Keep growing</b><p>Small steps every day lead to big changes.</p><Link href="/goals">View your goals →</Link></div><div className="profile"><div className="profile-avatar">A</div><div><b>Alex Morgan</b><small>Student account</small></div><span className="profile-menu">•••</span></div></div>
  </aside>;
}
