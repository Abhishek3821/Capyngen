import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // The recruitment API origin-gates requests to https://capyngen.com, so a
    // localhost dev page can't call it directly (403). The dev server proxies
    // it and sends the allowed Origin instead.
    proxy: {
      "/recruitment-api": {
        target: "https://api.orinite.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/recruitment-api/, "/api/v1/public/recruitment"),
        headers: { Origin: "https://capyngen.com" },
      },
    },
  },
})
