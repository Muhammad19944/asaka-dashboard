import { h, reactive, ref } from "vue"

export const useTable = () => {
	let dataList = ref([])
	let loading = ref(false)
	let bordered = ref(false)
	let height = ref(200)

	return {
		dataList,
		loading,
		bordered,
		height
	}
}

export const useColumnIndex = () => {
	return {
		title: "#",
		key: 'index',
		width: 60,
		render: (rowData, rowIndex) => {
			return h('div', null, { default: () => rowIndex + 1 })
		},
	}
}

export const usePagination = () => {
	let options = reactive({
		page: 1,
		pageSize: 20,
		showSizePicker: true,
		pageCount: 1,
		pageSizes: [10, 20, 30, 40],
		setTotalSize(size) {
			options.pageCount = Math.ceil(size / options.pageSize)
		},
	})

	return options
}
