import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        movies: resolve(__dirname, "movies.html"),
        series: resolve(__dirname, "series.html"),
        movie: resolve(__dirname, "movie.html"),
        serie: resolve(__dirname, "serie.html"),
        auth: resolve(__dirname, "auth.html"),
      },
    },
  },
});
