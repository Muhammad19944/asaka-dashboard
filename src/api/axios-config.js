import router from "@/router"
import Axios from "axios"
import { getStorageItem } from "@/utils/storage"
import { AUTH } from "@/enums/storage"

const axios = Axios.create({
	baseURL: import.meta.env.VITE_BASE_URL
})

axios.interceptors.request.use(
	(config) => {
		config.headers = {
			Authorization: getStorageItem(AUTH) ? "Token " + getStorageItem(AUTH) : "",
			Accept: "application/json"
		};

		return config;
	},
	(error) => Promise.reject(error)
);

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		// Если нет токена
		if(!getStorageItem(AUTH)) {
			router.push({ name: "AuthLayout" }).catch(() => {})
		}

		return Promise.reject(error.response);
	}
);

export default axios
