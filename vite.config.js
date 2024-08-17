import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        reviews: resolve(__dirname, "pages/reviews/index.html"),
        services: resolve(__dirname, "pages/services/index.html"),
      },
    },
  },
});
