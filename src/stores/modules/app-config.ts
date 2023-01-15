import { defineStore } from "pinia"
// @ts-ignore
import appConfigSettings from "@/settings/app-config"

const useAppConfigStore = defineStore("app-config", {
    state: () => ({
        appConfigSettings
    }),
    actions: {
        changeTheme(payload) {
            this.appConfigSettings.theme = payload
        }
    }
})
export default useAppConfigStore
