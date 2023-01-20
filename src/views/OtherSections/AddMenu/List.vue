<template>
  <div class="add-menu-view">
    <n-card
      size="small"
      embedded
      class="h-full"
    >
      <basic-table
        :columns="TableColumns"
        :data="dataList"
        :max-height="715"
        title="Title will render here"
      >
      </basic-table>
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui"
import BasicTable from "@/components/UI/Table/Basic.vue"
import TableColumns from "./TableColumns"

const dataList = Array.from({ length: 20 }).map((_, index) => ({
	key: index,
	name: `Edward King ${index}`,
	age: 32,
	address: `London, Park Lane no. ${index}`
}))
</script>
