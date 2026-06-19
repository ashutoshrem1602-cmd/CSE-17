# JobNest — Job Portal Webpage

A modern, responsive Job Portal built with **React + Vite**, styled with **Bootstrap 5** and **Tailwind CSS**.

---

## 📁 Project Structure

```
job-portal/
├── index.html                 # HTML entry point (Vite loads this first)
├── package.json               # Project dependencies & scripts
├── vite.config.js             # Vite build/dev server config
├── tailwind.config.js         # Tailwind theme (colors, fonts)
├── postcss.config.js          # Required for Tailwind to process CSS
├── .gitignore
│
├── src/
│   ├── main.jsx                # React entry point — mounts <App /> to the DOM
│   ├── App.jsx                 # Root component — holds shared state & filtering logic
│   ├── index.css               # Tailwind directives + custom global CSS
│   │
│   ├── data/
│   │   └── jobsData.js         # Sample job listings (plain JS array)
│   │
│   └── components/
│       ├── Navbar.jsx          # Logo + Home/Jobs/Companies/Contact links
│       ├── Hero.jsx            # Heading + search bar
│       ├── FilterBar.jsx       # Location & job type dropdown filters
│       ├── JobListings.jsx     # Maps over filtered jobs → renders JobCards
│       ├── JobCard.jsx         # Single job card + "Apply Now" button
│       ├── CompaniesStrip.jsx  # Section listing hiring companies
│       └── Footer.jsx          # Social icons + copyright
│
└── public/                     # (static assets, currently empty)
```

### Why this structure?
- **`components/`** — each piece of UI is its own file, so it's easy to find, edit, and reuse.
- **`data/jobsData.js`** — job listings live in one place. Add/edit/remove a job by editing this array — no component code needs to change.
- **`App.jsx`** — the only place that holds state (search term, filters). It passes data down to children via **props**, which is the core React pattern this project demonstrates.
- **`index.css`** — Tailwind's `@tailwind` directives plus custom CSS that Bootstrap/Tailwind utilities can't express cleanly (hover animations, badge colors, etc).

---

## 🚀 How to Run in VS Code

### 1. Prerequisites
Install **Node.js** (v18 or later) from [nodejs.org](https://nodejs.org). This also installs `npm`.

Check it's installed by opening a terminal and running:
```bash
node -v
npm -v
```

### 2. Open the project in VS Code
- Open VS Code
- `File → Open Folder…` → select the `job-portal` folder
- Open the integrated terminal: `` Ctrl + ` `` (Windows/Linux) or `Cmd + J` (Mac)

### 3. Install dependencies
In the VS Code terminal, run:
```bash
npm install
```
This downloads React, Vite, Bootstrap, and Tailwind into a `node_modules` folder (this can take a minute).

### 4. Start the development server
```bash
npm run dev
```
You'll see output like:
```
  VITE ready in 400 ms
  ➜  Local:   http://localhost:5173/
```
**Ctrl-click** the `localhost` link (or paste it into your browser) to view the app. The page will **hot-reload** automatically whenever you save a file.

### 5. Stop the server
Press `Ctrl + C` in the terminal.

### 6. (Optional) Build for production
```bash
npm run build
```
This creates an optimized `dist/` folder you can deploy anywhere (Netlify, Vercel, GitHub Pages, etc).

---

## 🔧 Recommended VS Code Extensions
- **ES7+ React/Redux/React-Native snippets** — handy JSX shortcuts
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **Prettier** — auto code formatting

---

## ✏️ How to Customize

| Want to...                          | Edit this file                       |
|--------------------------------------|---------------------------------------|
| Add/edit/remove a job listing        | `src/data/jobsData.js`                |
| Change brand colors                  | `tailwind.config.js` → `colors.brand` |
| Change navbar links                  | `src/components/Navbar.jsx`           |
| Change hero heading/text             | `src/components/Hero.jsx`             |
| Add a new filter (e.g. salary range) | `src/components/FilterBar.jsx` + `src/App.jsx` |
| Change the Apply button behavior     | `src/components/JobCard.jsx`          |

---

## 🛠️ Tech Stack
- **React 18** (functional components + hooks: `useState`, `useMemo`)
- **Vite** (fast dev server & build tool)
- **Bootstrap 5** (grid system, navbar, form controls)
- **Tailwind CSS** (utility classes, custom theme)
- **Bootstrap Icons** (social icons, UI icons)

---

## 📌 Notes
- This is a **frontend-only** project — no backend/database. The "Apply Now" button simply shows a confirmation alert.
- Job data is stored in a local JS array, not fetched from an API, making this beginner-friendly and easy to run with zero configuration besides `npm install`.
