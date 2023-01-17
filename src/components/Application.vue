<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :theme="appTheme === DARK ? darkTheme : null"
    :locale="ruRU"
    :date-locale="dateRuRU"
  >
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>

    <n-global-style />
  </n-config-provider>
</template>

<script setup>
import { computed } from "vue"
import { NConfigProvider, NGlobalStyle, NDialogProvider, NNotificationProvider, NMessageProvider, darkTheme, ruRU, dateRuRU } from "naive-ui"
import { DARK } from "@/enums/theme"
import useAppConfigStore from "@/stores/modules/app-config"
import themeConfigSettings from "@/stores/modules/theme-config"

const appConfig = useAppConfigStore()
const themeConfig = themeConfigSettings()

const appTheme = computed(() => appConfig.appConfigSettings?.theme)
const themeOverrides = computed(() => themeConfig.themeConfigSettings)
</script>
