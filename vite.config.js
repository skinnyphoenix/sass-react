import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      additionaData: `
    "@import "./src/scss/variables/all.scss
    "@import "./src/scss/helpers/mixins.scss
    "@import "./src/scss/helpers/resolutions.scss`,
    },
  },
});
