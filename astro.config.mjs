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
    resolve: {
      alias: {
        // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
        // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
        ...(import.meta.env.PROD
          ? { "react-dom/server": "react-dom/server.edge" }
          : {}),
      },
    },
  },

  output: "static",

  adapter: cloudflare({
    sessionKVBindingName: "SESSION",
    platformProxy: {
      enabled: true,
    },
    imageService: "compile",
  }),
});
