<template>
  <div class="switch-language">
    <div class="locale-changer">
      <select v-model="$root.$i18n.locale">
        <option v-for="locale in ['uz', 'ru']" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
      {{ $root.$i18n.locale }}
    </div>

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
import { NDropdown, NButton, NIcon } from 'naive-ui'
import { LanguageOutline } from "@vicons/ionicons5"

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
</script>
