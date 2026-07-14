import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/business-card/",
  assetsInclude: ["**/*.svg"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components/index"),
      "@contexts": path.resolve(__dirname, "./src/contexts/index"),
      "@sections": path.resolve(__dirname, "./src/sections/index"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/variables" as *;
          @use "@styles/mixins" as *;
          @use "@styles/animations" as *;
        `,
      },
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 100000,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
