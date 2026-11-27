import { defineConfig } from "vite";

// O Vite é usado apenas como servidor local. O site é estático:
// index.html + assets/ funcionam direto no Live Server e no GitHub Pages.
export default defineConfig({
  base: "./",
  publicDir: false,
});
