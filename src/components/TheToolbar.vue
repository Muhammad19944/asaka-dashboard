<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    class="app-toolbar flex items-center h-14 py-1 px-6"
  >

  <switch-theme />

    <!-- <app-avatar
      color="#ff2200"
      :size="34"
    /> -->
  </n-layout-header>
</template>

<script setup>
import { NLayoutHeader } from "naive-ui"
import { ref } from "vue"
import SwitchTheme from "./SwitchTheme.vue"

const inverted = ref(false)
</script>
