<template>
    <div class="switch-theme">
        <n-switch
            size="large"
            :default-value="currentTheme"
            :on-update:value="(value) => value ? changeTheme(DARK) : changeTheme(null)"
        >
            <template #checked-icon>
                <n-icon :component="MoonOutline" size="14" />
            </template>
            <template #unchecked-icon>
                <n-icon :component="SunnyOutline" size="14" />
            </template>
        </n-switch>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { SunnyOutline, MoonOutline } from "@vicons/ionicons5"
import { NSwitch, NIcon } from "naive-ui"
import useAppConfigStore from "@/stores/modules/app-config"
import appConfigSettings from "@/settings/app-config"
import { DARK } from "@/enums/theme"

const { changeTheme } = useAppConfigStore()
const currentTheme = computed(() => appConfigSettings.theme === DARK)
</script>