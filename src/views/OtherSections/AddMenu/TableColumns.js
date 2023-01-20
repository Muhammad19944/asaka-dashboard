

import { h } from "vue"
import { useColumnIndex } from "@/composables/useTable"

const tableColumns = [
	useColumnIndex(),
	{
		title: "Name",
		key: "name",
		width: 200,
		fixed: "left"
	},
	{
		title: "Age",
		key: "age",
		width: 100,
		fixed: "left"
	},
	{
		title: "Row",
		key: "row",
		render(row, index) {
			return h("span", ["row ", index]);
		}
	},
	{
		title: "Row1",
		key: "row1",
		render(row, index) {
			return h("span", ["row ", index]);
		}
	},
	{
		title: "Row2",
		key: "row2",
		render(row, index) {
			return h("span", ["row ", index]);
		},
		width: 100,
		fixed: "right"
	},
	{
		title: "Address",
		key: "address",
		width: 250,
		fixed: "right"
	}
]

export default tableColumns
