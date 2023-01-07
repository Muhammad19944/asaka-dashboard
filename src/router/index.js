import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        }
      ]
    },

    // AuthLayout
    {
      path: "/auth",
      name: "AuthLayout",
      component: () => import("@/layout/AuthLayout.vue")
    }
  ]
})

export default router
