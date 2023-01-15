<template>
  <div class="switch-language">
    <n-dropdown
      placement="bottom"
      trigger="click"
      size="medium"
      show-arrow
      :options="options"
      @select="handleSelect"
    >
      <n-button size="small" text>
        <template #icon>
          <n-icon :component="LanguageOutline" />
        </template>
        
        <span class="ml-1">English</span>
      </n-button>
    </n-dropdown>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { NDropdown, NButton, NIcon } from 'naive-ui'
import { LanguageOutline } from "@vicons/ionicons5"
import { setupI18n } from "@/i18n"

const options = [
  {
    label: "Jay Gatsby",
    key: "jay gatsby"
  },
  {
    label: "Daisy Buchanan",
    key: "daisy buchanan"
  },
]

function handleSelect(value) {
  console.log(value)
}

onMounted(() => {
  setupI18n()
})
</script>