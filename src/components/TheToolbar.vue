<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    class="app-toolbar flex items-center h-14 py-1 px-6"
  >
    <n-space justify="end" class="w-full">
      <switch-language />
      
      <switch-theme class="ml-2" />
    </n-space>

    <!-- <app-avatar
      color="#ff2200"
      :size="34"
    /> -->
  </n-layout-header>
</template>

<script setup>
import { NLayoutHeader, NSpace } from "naive-ui"
import { ref } from "vue"
import SwitchTheme from "./SwitchTheme.vue"
import SwitchLanguage from "./SwitchLanguage.vue"

const inverted = ref(false)
</script>
