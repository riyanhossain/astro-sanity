<template>
  <button
    class="px-4 py-2 rounded font-semibold transition-all duration-200 ease-in-out"
    :class="[
      primary
        ? 'bg-primary text-white border-2 border-primary hover:bg-primary-dark hover:border-primary-dark'
        : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    ]"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  primary: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);

function handleClick() {
  if (props.url) {
    window.open(props.url, "_blank");
  }
  emit("click");
}
</script>
