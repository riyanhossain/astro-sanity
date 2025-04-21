// src/middleware.ts
import type { MiddlewareHandler } from "astro";

// Polyfill for Cloudflare
if (typeof MessageChannel === "undefined") {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      this.port1 = { postMessage: () => {} };
      this.port2 = { postMessage: () => {} };
    }
  };
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  return next();
};
