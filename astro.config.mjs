// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://suaweb.com.ar",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
      filter: (page) => !page.includes("/admin/") && !page.includes("/private/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});