# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Mini Local Business Dashboard - Frontend

This is the frontend of the Mini Local Business Dashboard built with **React**, **Vite**, and **Tailwind CSS**.

## 🖥️ Features

- Input form for business name and location
- Displays business rating, reviews, and SEO headline
- Regenerate headline via backend API
- Responsive and styled with Tailwind CSS

## 🚀 Getting Started

### 1. Install dependencies
cd frontend
npm install
2. Start the development server
run
npm run dev
The app will be available at:
📍 http://localhost:5173/ (or next available port if 5173 is busy)

⚙️ Project Structure
frontend/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js

📦 Built With
React
Tailwind CSS
Vite
Axios