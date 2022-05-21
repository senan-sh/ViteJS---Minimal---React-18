import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import { resolve } from "path"

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  plugins: [
    pluginReact({
      fastRefresh: true
    })
  ],
  mode: "development",
})