<template>
  <div class="flex items-end">
    <n-avatar
      :round="props.round"
      :size="props.size"
      :color="props.color"
    >
      <span class="font-regular">{{ name[0] }}</span>
    </n-avatar>

    <template v-if="hasInfo">
      <div class="ml-2 text-xs font-medium">
        <p class="leading-4">Muhammad</p>
        <span class="text-[10px] text-gray-400">Пользователь</span>
      </div>
    </template>
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
  },
  name: {
		type: String,
    default: "Default"
  },
  hasInfo: {
		type: Boolean,
    default: false
  }
})
</script>
