"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SkillContext = createContext(null);

const initialSkills = [
  { id: 1, name: "JavaScript", short: "JS", category: "Development", level: "Intermediate", progress: 72, color: "purple" },
  { id: 2, name: "UI Design", short: "UI", category: "Design", level: "Beginner", progress: 45, color: "orange" },
  { id: 3, name: "Communication", short: "CO", category: "Soft skill", level: "Intermediate", progress: 64, color: "green" },
  { id: 4, name: "React", short: "RE", category: "Development", level: "Beginner", progress: 38, color: "blue" }
];

const initialGoals = [
  { id: 1, title: "Practise JavaScript for 20 minutes", category: "Practice" },
  { id: 2, title: "Watch one UI design lesson", category: "Learning" },
  { id: 3, title: "Build a small React component", category: "Project" },
  { id: 4, title: "Review notes from this week", category: "Learning" }
];

export function SkillProvider({ children }) {
  const [skills, setSkills] = useState(initialSkills);
  const [goals, setGoals] = useState(initialGoals);
  const [completedGoals, setCompletedGoals] = useState([2]);

  function addSkill(skill) {
    const short = skill.name.split(/\s+/).map(word => word[0]).join("").slice(0,2).toUpperCase();
    const colors = ["purple","orange","green","blue"];
    setSkills(current => [...current, { ...skill, id: Date.now(), short, color: colors[current.length % colors.length] }]);
  }

  function addGoal(goal) {
    setGoals(current => [...current, { ...goal, id: Date.now() }]);
  }

  function toggleGoal(id) {
    setCompletedGoals(current => current.includes(id) ? current.filter(goalId => goalId !== id) : [...current, id]);
  }

  const totalProgress = useMemo(() => skills.length ? Math.round(skills.reduce((sum, skill) => sum + skill.progress, 0) / skills.length) : 0, [skills]);

  const value = { skills, goals, completedGoals, totalProgress, addSkill, addGoal, toggleGoal };
  return <SkillContext.Provider value={value}>{children}</SkillContext.Provider>;
}

export function useSkill() {
  const context = useContext(SkillContext);
  if (!context) throw new Error("useSkill must be used inside SkillProvider");
  return context;
}
