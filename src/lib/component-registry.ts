import Hero from "@/components/Hero.astro";
import TextSection from "@/components/TextSection.astro";
import Button from "@/components/Button.vue";
import Spacer from "@/components/Spacer.vue";
import Image from "@/components/Image.vue";

export const componentRegistry = {
  heroSection: Hero,
  textSection: TextSection,
  button: Button,
  spacer: Spacer,
  imageComponent: Image,
};
