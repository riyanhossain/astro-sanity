// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "6vcelkys",
      dataset: "production",
    }),
    vue(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
