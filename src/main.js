import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n"

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  // something vue-i18n options here ...
})

import "@/assets/css/main.css"

const app = createApp(App)

import AppAvatar from "@/components/UI/AppAvatar.vue"

app.component("AppAvatar", AppAvatar)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
