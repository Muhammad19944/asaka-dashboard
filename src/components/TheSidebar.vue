<template>
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
</template>

<script setup>
import { NLayoutSider, NMenu } from "naive-ui"
import { ref } from "vue"

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
