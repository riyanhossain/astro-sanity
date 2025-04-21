// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "6vcelkys",
      dataset: "production",
      studioBasePath: "/studio",
    }),
    vue(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",

  adapter: vercel(),
});
