import { h } from "vue"
import { RouterLink } from "vue-router"
import { NIcon } from "naive-ui"

/*
*
* */
export function renderIcon(icon) {
	return () => h(NIcon, null, { default: () => h(icon) });
}

/*
*
* */
export function renderLink(text, name, params, query) {
	return () => h(
		RouterLink,
		{
			to: { name, params, query }
		},
		{ default: () => text }
	)
}
