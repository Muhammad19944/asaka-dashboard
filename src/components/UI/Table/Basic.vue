<template>
  <div class="basic-table">
    <div class="table-header flex items-center justify-between mb-5">
      <h1 v-if="props.hasTitle">{{ props.title }}</h1>

      <div class="header-toolbar">
        <router-link
          v-if="props.createButtonUrl"
          :to="{ name: props.createButtonUrl }"
        >
          <n-button type="success" tertiary>
            Добавить новый

            <template #icon>
              <add-circle-outline />
            </template>
          </n-button>
        </router-link>
      </div>
    </div>

    <div class="table-content">
      <n-data-table
        v-bind="props"
        :pagination="pagination"
      >
        <template #[item] v-for="item in Object.keys($slots)" :key="item">
          <slot :name="item" v-bind="props.data"></slot>
        </template>
      </n-data-table>
    </div>
  </div>
</template>

<script setup>
import { NDataTable, NButton } from "naive-ui"
import { AddCircleOutline } from "@vicons/ionicons5"
import { usePagination } from "@/composables/useTable"

const pagination = usePagination()

const props = defineProps({
	...NDataTable.props,
	title: {
		type: String,
		default: null
	},
	hasTitle: {
		type: Boolean,
		default: true
	},
  createButtonUrl: {
		type: String
  }
})
</script>
