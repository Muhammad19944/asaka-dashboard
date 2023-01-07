<template>
<!--  :theme="darkTheme"-->
  <n-config-provider>
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
import { NConfigProvider, NDialogProvider, NNotificationProvider, NMessageProvider, darkTheme } from 'naive-ui'
</script>
