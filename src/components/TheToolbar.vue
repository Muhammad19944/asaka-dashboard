<template>
  <div class="app-toolbar">
    <n-layout-header
      :inverted="inverted"
      bordered
      class="h-14"
    >
      Header
    </n-layout-header>
  </div>
</template>

<script setup>
import { NLayoutHeader } from "naive-ui"
import { ref } from "vue"

const inverted = ref(false)
</script>
