import Hero from "@/components/Hero.astro";
import TextSection from "@/components/TextSection.astro";
import Button from "@/components/Button.vue";
import Spacer from "@/components/Spacer.vue";
import Image from "@/components/Image.vue";

// Define a union type of all possible component types
export type ComponentType =
  | "heroSection"
  | "textSection"
  | "button"
  | "spacer"
  | "imageComponent";

// Create a type that represents a generic component that can be rendered
export type GenericComponent = any;

// Define the registry with components that can be either Astro or Vue components
export const componentRegistry: Record<ComponentType, GenericComponent> = {
  heroSection: Hero,
  textSection: TextSection,
  button: Button,
  spacer: Spacer,
  imageComponent: Image,
};
