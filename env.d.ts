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
