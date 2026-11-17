import { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  envDir: false,
  plugins: [reactRouter(), babel({ presets: [reactCompilerPreset()] })],
});
