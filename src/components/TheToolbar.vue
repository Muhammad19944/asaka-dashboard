<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    class="app-toolbar flex items-center h-14 py-1 px-6"
  >
    <div class="flex flex-col">
      <h4 class="font-medium">Привет Muhammad</h4>
      <span class="font-thin text-xs">С возвращением !</span>
    </div>

    <n-space justify="end" align="center" class="flex-1">
      <switch-language />

      <switch-theme class="mr-2 ml-3" />

      <app-avatar
        :color="themeConfig.common.primaryColor"
        :size="34"
        has-info
      />
    </n-space>
  </n-layout-header>
</template>

<script setup>
import { NLayoutHeader, NSpace } from "naive-ui"
import { ref } from "vue"
import SwitchTheme from "./SwitchTheme.vue"
import SwitchLanguage from "./SwitchLanguage.vue"
import themeConfig from "@/settings/theme-config"

const inverted = ref(false)

console.log(themeConfig.common.primaryColor)
</script>
