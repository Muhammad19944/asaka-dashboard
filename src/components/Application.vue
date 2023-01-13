<template>
  <n-config-provider :theme="darkTheme">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup>
import { provide, ref } from 'vue'
import { NConfigProvider, NDialogProvider, NNotificationProvider, NMessageProvider, darkTheme } from 'naive-ui'

const theme = ref(null)

function updateTheme(value) {
  theme.value = value
}

provide('theme', { theme, updateTheme })
</script>
