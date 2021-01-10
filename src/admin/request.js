import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem('token');

if (token) {
	axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

//перехватчик на ответ(есть на запрос перехватчик request)
// use() этот обработчик выполнится до того как axios получит resolve
axios.interceptors.response.use( //Добавить перехватчик ответа
	response => response,          //Сделайте что-нибудь с данными ответа
	async error => {               //Сделайте что-нибудь с ошибкой ответа
		//сохраняем неудавшийся запрос
		let originalRequest = error.config;

		// if (error.response.status == 400) { // 400 Bad Request - указывает, что сервер не смог понять запрос из-за недействительного синтаксиса.
		// 	console.error('Ошибка авторизации пользователя')
		// }
		if (error.response.status == 401) { //401 Unauthorized - клиента указывает, что запрос не был применен, поскольку ему не хватает действительных учетных данных для целевого ресурса.

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