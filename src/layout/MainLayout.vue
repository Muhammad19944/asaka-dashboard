<template>
<!--  <n-theme-editor>-->
    <Application>
      <n-layout has-sider class="h-screen">
        <the-sidebar />

        <n-layout>
          <the-toolbar />

          <n-layout-content class="disable-layout-content-overflow">
            <router-view class="app-router-view py-3 px-4 overflow-x-auto" />
          </n-layout-content>
        </n-layout>
      </n-layout>
    </Application>
<!--  </n-theme-editor>-->
</template>

<script setup>
import Application from "@/components/Application.vue"
import TheSidebar from "@/components/TheSidebar.vue"
import TheToolbar from "@/components/TheToolbar.vue"
import { NThemeEditor, NLayout, NLayoutContent } from "naive-ui"
</script>

<style>
.app-router-view {
  height: calc(100vh - 56px);
}
</style>
