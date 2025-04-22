/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

// Add Vue component type declarations
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Add Astro component type declarations
declare module "*.astro" {
  import { AstroComponentFactory } from "astro/dist/runtime/server";
  const Component: AstroComponentFactory;
  export default Component;
}

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  // replace `MY_KV` with your KV namespace
  SESSION: KVNamespace;
};

// use a default runtime configuration (advanced mode).
type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}
