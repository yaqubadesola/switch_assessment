import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "https://github.com/yaqubadesola/switch_assessment";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
