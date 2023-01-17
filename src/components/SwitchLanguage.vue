<template>
  <div class="switch-language">
    <n-dropdown
      placement="bottom"
      trigger="click"
      size="medium"
      show-arrow
      :options="AVAILABLE_LOCALES"
      @select="(value) => changeLocale(value)"
    >
      <n-button size="small" text>
        <template #icon>
          <n-icon :component="LanguageOutline" />
        </template>

        <span class="ml-1">{{ currentLang.label }}</span>
      </n-button>
    </n-dropdown>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router"
import { NDropdown, NButton, NIcon } from 'naive-ui'
import { LanguageOutline } from "@vicons/ionicons5"
import { useI18n } from "vue-i18n"
import { CURRENT_LOCALE, AVAILABLE_LOCALES } from "@/i18n"

let { locale } = useI18n()
let router = useRouter()

const setCurrentLang = (lang) => AVAILABLE_LOCALES.find(locale => locale.key === lang)
let currentLang = computed(() => setCurrentLang(CURRENT_LOCALE))

function changeLocale(value) {
  locale.value = value
  currentLang = computed(() => setCurrentLang(value))

  router.replace({
    params: {
      locale: value
    }
  })
}
</script>
