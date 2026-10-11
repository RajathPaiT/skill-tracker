import "./globals.css";
import { SkillProvider } from "../context/SkillContext";

export const metadata = {
  title: "SkillTrack | Student Skill Tracker",
  description: "Track your skills, learning goals, and progress."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkillProvider>{children}</SkillProvider>
      </body>
    </html>
  );
}
