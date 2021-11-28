import axios from 'axios';
import config from '../../app.config';
import LocalStorage from './LocalStorage';

const apiCaller = axios.create({
	baseURL: config.NGRX_BASE_URL,
});

apiCaller.interceptors.request.use(
	function (config) {
		const { access_token: accessToken } = LocalStorage.getItem('token');

		if (accessToken) {
			config.headers = {
				Accept: 'application/json',
				Authorization: `Bearer ${accessToken}`,
			};
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

class Axios {
	async apiPost(url, payload) {
		try {
			const { data, status } = await apiCaller.post(url, payload);
			return { data, status };
		} catch (error) {
			if (!error.response) {
				return { data: { message: error.message } };
			}

			let { status, data } = error.response;
			return { status, data };
		}
	}

	async apiGet(url) {
		try {
			const { data, status } = await apiCaller.get(url);
			return { data, status };
		} catch (error) {
			let { status, data } = error.response;
			return { status, data };
		}
	}
}

export default new Axios();
