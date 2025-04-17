<template>
  <div
    class="h-[var(--height)] md:h-[var(--md-height)] xl:h-[var(--xl-height)] w-full"
    :style="spacerStyle"
  ></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  height: {
    type: Number,
    default: 0,
  },
  mdHeight: {
    type: Number,
  },
  xlHeight: {
    type: Number,
  },
});

const spacerStyle = computed(() => {
  return {
    "--height": `${props.height}px`,
    "--md-height": props.mdHeight ? `${props.mdHeight}px` : `${props.height}px`,
    "--xl-height":
      props.xlHeight !== undefined
        ? `${props.xlHeight}px`
        : props.mdHeight !== undefined
          ? `${props.mdHeight}px`
          : `${props.height}px`,
  };
});
</script>
