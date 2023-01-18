import { createRouter, createWebHistory } from 'vue-router'
import { setupI18n, setI18nLanguage, SUPPORT_LOCALES, CURRENT_LOCALE } from "@/i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale",
      name: "AppLanguage",
      component: () => import("@/views/AppLanguage.vue"),
      children: [
        // MainLayout
        {
          path: "",
          name: "MainLayout",
          component: () => import("@/layout/MainLayout.vue"),
          redirect: { name: "Dashboard" },
          children: [
            {
              path: "dashboard",
              name: "Dashboard",
              component: () => import("@/views/Dashboard.vue")
            },
            {
              path: "add-menu",
              name: "OtherSectionAddMenu",
              component: () => import("@/views/OtherSections/AddMenu/List.vue")
            }
          ]
        },

        // AuthLayout
        {
          path: "auth",
          name: "AuthLayout",
          component: () => import("@/layout/AuthLayout.vue")
        }
      ]
    },
  ]
})

// navigation guards
router.beforeEach(async (to, from, next) => {
  const i18n = setupI18n()
  const paramsLocale = to.params.locale

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${CURRENT_LOCALE}`)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})

export default router
