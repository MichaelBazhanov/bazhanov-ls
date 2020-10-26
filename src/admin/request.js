import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem('token');

if (token) {
	axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

//перехватчик на ответ(есть на запрос перехватчик request)
// use() этот обработчик выполнится до того как axios получит resolve
axios.interceptors.response.use(
	response => response,
	async error => {
		//сохраняем неудавшийся запрос
		let originalRequest = error.config;

		if (error.response.status == 401) {

			//получаем обновленный token
			const response = await axios.post('/refreshToken');
			const token = response.data.token;

			//перезаписываем token
			localStorage.setItem('token', token)
			axios.defaults.headers["Authorization"] = `Bearer ${token}`;
			originalRequest.headers["Authorization"] = `Bearer ${token}`;//перезаписываем старый token

			//вызываем и возвращаем старый запрос с новыми данными
			return axios(originalRequest)
		}

		return Promise.reject(error)
	}
)

export default axios;