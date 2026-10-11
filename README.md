# SkillTrack — Student Skill Tracker

A student-focused skill and learning-goal dashboard built with Next.js, React Context, and CSS. It uses local dummy data; no backend is required for this milestone.

## Features
- Landing page
- Dashboard with progress summary
- View tracked skills and add a skill
- View learning goals and add a goal
- Mark goals complete/incomplete
- Shared state through React Context
- Reusable sidebar and responsive layout

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Pages
- `/` — landing page
- `/dashboard` — overview
- `/skills` — skills library and add-skill form
- `/goals` — learning goals and completion toggles

## Project structure
```text
app/
  dashboard/page.js
  goals/page.js
  skills/page.js
  globals.css
  layout.js
  page.js
components/
  Icon.js
  Sidebar.js
context/
  SkillContext.js
DESIGN-SYSTEM.md
PRODUCT-ASSUMPTIONS.md
README.md
package.json
```

## State management
`context/SkillContext.js` contains the `SkillProvider`, `createContext`, `useContext`, and state update functions. The data is intentionally held in React state and resets on a full page refresh.

## Current limitations
- No authentication or backend.
- Data is mock data and is not persisted after refresh.
- Dates and profile details are demo content.

## Suggested GitHub issues
1. Initialize Next.js project
2. Build landing page
3. Create responsive sidebar navigation
4. Create reusable skill card and progress bar
5. Implement Skill Context Provider
6. Build dashboard overview
7. Implement add-skill form
8. Implement goals list and completion state
9. Add responsive styling
10. Write README and prepare demo

## Demo checklist
- Navigate from landing page to dashboard.
- Add a skill and show it in the skill list.
- Add a learning goal.
- Mark a goal complete and show the dashboard count update.
- Resize the browser to demonstrate responsive layout.
