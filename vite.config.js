import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // base: "/rahul-chaurasia-portfolio/", // Set the base to your repository name
  plugins: [react()],
});
