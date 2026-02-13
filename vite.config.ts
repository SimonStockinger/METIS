import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  base: "/METIS",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
})
