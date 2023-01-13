<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    class="app-toolbar flex items-center h-14 py-1 px-6"
  >
    <n-button @click="updateTheme(darkTheme)" type="primary">
      Dark
    </n-button>
    <n-button @click="updateTheme(null)">
      Light
    </n-button>

    <app-avatar
      color="#ff2200"
      :size="34"
    />
  </n-layout-header>
</template>

<script setup>
import { NLayoutHeader, NButton, darkTheme } from "naive-ui"
import { ref, inject } from "vue"

const { theme, updateTheme } = inject('theme')
const inverted = ref(false)

</script>
