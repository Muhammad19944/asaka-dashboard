<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="256"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <div class="flex items-center h-14 relative px-5">
      <img src="/img/logo-small.svg" alt="Asaka logo" class="logo-small mt-[2px]">
      <img src="/img/logo-text.svg" alt="Asaka logo text" class="logo-text max-w-[140px] ml-3 mt-1">
    </div>

    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :indent="18"
    />
  </n-layout-sider>
</template>

<script setup>
import { ref } from "vue"
import { NLayoutSider, NMenu } from "naive-ui"
import { SettingsOutline, TrailSignOutline } from "@vicons/ionicons5"
import { renderIcon, renderLink } from "@/utils"

const collapsed = ref(false)

const menuOptions = [
	{
		label: "Другие разделы",
		key: "other-sections",
		icon: renderIcon(SettingsOutline),
		children: [
			{
				label: renderLink("Добавить меню", "OtherSectionAddMenu"),
				key: "add-menu",
				icon: renderIcon(TrailSignOutline)
			}
		]
	}
];
</script>

<style>
.n-layout-sider--collapsed .logo-text {
  display: none;
}
</style>
