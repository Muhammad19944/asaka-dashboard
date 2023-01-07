<template>
  <Application>
    <n-layout class="main-layout">
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>

        <n-layout>
          <router-view />
        </n-layout>
      </n-layout>
    </n-layout>
  </Application>
</template>

<script setup>
import Application from "@/components/Application.vue"
import { ref } from "vue"
import { NLayout, NLayoutSider, NMenu } from "naive-ui";

const inverted = ref(false)

const menuOptions = [
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
]
</script>

<style>
.main-layout {
  height: 100vh;
}
</style>
