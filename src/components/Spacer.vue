<template>
  <div class="spacer" :style="spacerStyle"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  height: {
    type: Number,
    default: 40
  },
  xsHeight: {
    type: Number,
    default: null
  },
  smHeight: {
    type: Number,
    default: null
  },
  mdHeight: {
    type: Number,
    default: null
  },
  lgHeight: {
    type: Number,
    default: null
  },
  xlHeight: {
    type: Number,
    default: null
  }
});

const spacerStyle = computed(() => {
  return {
    '--height': `${props.height}px`,
    '--xs-height': props.xsHeight ? `${props.xsHeight}px` : `${props.height}px`,
    '--sm-height': props.smHeight ? `${props.smHeight}px` : (props.xsHeight ? `${props.xsHeight}px` : `${props.height}px`),
    '--md-height': props.mdHeight ? `${props.mdHeight}px` : (props.smHeight ? `${props.smHeight}px` : (props.xsHeight ? `${props.xsHeight}px` : `${props.height}px`)),
    '--lg-height': props.lgHeight ? `${props.lgHeight}px` : (props.mdHeight ? `${props.mdHeight}px` : (props.smHeight ? `${props.smHeight}px` : (props.xsHeight ? `${props.xsHeight}px` : `${props.height}px`))),
    '--xl-height': props.xlHeight ? `${props.xlHeight}px` : (props.lgHeight ? `${props.lgHeight}px` : (props.mdHeight ? `${props.mdHeight}px` : (props.smHeight ? `${props.smHeight}px` : (props.xsHeight ? `${props.xsHeight}px` : `${props.height}px`))))
  };
});
</script>

<style scoped>
.spacer {
  display: block;
  width: 100%;
  height: var(--height);
}

/* Extra small screens (≥480px) */
@media (min-width: 480px) {
  .spacer {
    height: var(--xs-height);
  }
}

/* Small screens (≥640px) */
@media (min-width: 640px) {
  .spacer {
    height: var(--sm-height);
  }
}

/* Medium screens (≥768px) */
@media (min-width: 768px) {
  .spacer {
    height: var(--md-height);
  }
}

/* Large screens (≥1024px) */
@media (min-width: 1024px) {
  .spacer {
    height: var(--lg-height);
  }
}

/* Extra large screens (≥1280px) */
@media (min-width: 1280px) {
  .spacer {
    height: var(--xl-height);
  }
}
</style>
