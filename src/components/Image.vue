<template>
  <figure :class="figureClasses" :style="containerStyle">
    <img
      :src="imageUrl"
      :alt="alt"
      class="block max-w-full h-auto"
      :style="imageStyle"
      loading="lazy"
      @error="handleImageError"
    />
    <figcaption v-if="caption" class="text-sm text-gray-600 mt-2 text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { urlFor } from "../lib/sanity";

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  maxWidth: {
    type: String,
    default: null,
  },
  layout: {
    type: String,
    default: "fullWidth",
  },
});

const imageLoadError = ref(false);

const imageUrl = computed(() => {
  if (!props.image || imageLoadError.value) return "";

  try {
    return urlFor(props.image).auto("format").width(1200).quality(80).url();
  } catch (e) {
    console.error("Error generating image URL:", e);
    return "";
  }
});

const figureClasses = computed(() => {
  const classes = ["m-0 w-full"];

  switch (props.layout) {
    case "fullWidth":
      classes.push("w-full");
      break;
    case "contained":
      classes.push("w-full max-w-screen-xl mx-auto");
      break;
    case "left":
      classes.push("mr-auto");
      break;
    case "center":
      classes.push("mx-auto text-center");
      break;
    case "right":
      classes.push("ml-auto");
      break;
  }

  return classes;
});

const containerStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.maxWidth) {
    style.maxWidth = props.maxWidth;
  }

  return style;
});

const imageStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.width) {
    style.width = props.width;
  }

  return style;
});

function handleImageError() {
  imageLoadError.value = true;
  console.error("Failed to load image");
}
</script>
