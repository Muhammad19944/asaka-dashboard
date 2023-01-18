import { defineStore } from "pinia"
import themeConfigSettings from "../../settings/theme-config"

const useThemeConfigStore = defineStore("theme-config", {
    state: () => ({
        themeConfigSettings
    })
})
export default useThemeConfigStore
