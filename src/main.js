import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from "@/i18n";

import App from './App.vue'
import router from './router'

import "@/assets/css/main.css"

const app = createApp(App)

import AppAvatar from "@/components/UI/AppAvatar.vue"

app.component("AppAvatar", AppAvatar)

app.use(createPinia())
app.use(router)
app.use(setupI18n())

app.mount('#app')
