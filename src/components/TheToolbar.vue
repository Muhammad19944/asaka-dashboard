<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    class="app-toolbar flex items-center h-14 py-1 px-6"
  >
    <n-button @click="changeLang('dark')" type="primary">
      Dark
    </n-button>
    <n-button @click="changeLang(null)">
      Light
    </n-button>

    <app-avatar
      color="#ff2200"
      :size="34"
    />
  </n-layout-header>
</template>

<script setup>
import { NLayoutHeader, NButton } from "naive-ui"
import { ref } from "vue"
import useAppConfigStore from "@/stores/modules/app-config"

const inverted = ref(false)
const { changeLang } = useAppConfigStore()
</script>
