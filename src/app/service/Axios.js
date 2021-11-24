import axios from 'axios';
class Axios {
	axiosCalls = axios.create({
		baseURL: process.env.REACT_APP_API_BASE_URL,
	});

	async apiPost(url, payload) {
		try {
			const { data, status } = await this.axiosCalls.post(url, payload);
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
			const { data, status } = await this.axiosCalls.get(url);
			return { data, status };
		} catch (error) {
			let { status, data } = error.response;
			return { status, data };
		}
	}
}

export default new Axios();
