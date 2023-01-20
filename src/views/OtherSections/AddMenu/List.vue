<template>
  <div class="add-menu-view">
    <n-card
      ref="cardRef"
      size="small"
      embedded
      class="h-full"
    >
      <basic-table
        :columns="TableColumns"
        :data="dataList"
        :max-height="height"
        headerTitle="Title will render here"
      >
      </basic-table>
    </n-card>
  </div>
</template>

<script setup>
import { onMounted, ref, unref } from "vue"
import { NCard } from "naive-ui"
import BasicTable from "@/components/UI/Table/Basic.vue"
import TableColumns from "./TableColumns"
import { useTableHeight } from "@/composables/useTable"

const dataList = Array.from({ length: 20 }).map((_, index) => ({
	key: index,
	name: `Edward King ${index}`,
	age: 32,
	address: `London, Park Lane no. ${index}`
}))

const cardRef = ref(null)
let height = ref(200)

onMounted(() => {
	height.value = useTableHeight(unref(cardRef))
})
</script>
