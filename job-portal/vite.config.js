import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration — enables React (JSX) support and fast dev server
export default defineConfig({
  plugins: [react()],
});
