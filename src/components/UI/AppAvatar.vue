<template>
  <div class="flex items-center">
    <n-avatar
      :round="props.round"
      :size="props.size"
      :color="props.color"
    />

    <slot v-if="$slots.info" name="info">
      <div>123</div>
    </slot>
  </div>
</template>

<script setup>
import { NAvatar } from "naive-ui"

const props = defineProps({
  size: {
    type: [Number, String],
    default: 32
  },
  round: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: "var(--n-color)"
  }
})
</script>
