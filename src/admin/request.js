import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem('token');

if (token) {
	axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

//перехватчик на ответ(есть на запрос перехватчик request)
// use() этот обработчик выполнится до того как axios получит resolve
axios.interceptors.response.use( //Добавить перехватчик ответа(хорошая и плохая функции)
	response => response,          //Функция все хорошо в ответе сервера никаких ошибок нет
	async error => {               //Функция произошла ошибка это значит что сервер ответил ошибкой
		//сохраняем версию предыдущего/неудавшегося запроса
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
			axios.defaults.headers["Authorization"] = `Bearer ${token}`;  //записываем новый token в новых запросов
			originalRequest.headers["Authorization"] = `Bearer ${token}`; //перезаписываем новый token в старый axios запрос (config)

			//выполняем старый запрос (с 401 который был) с новым token
			return axios(originalRequest)
		}

		return Promise.reject(error) //возвращаем промис в отклонено для того что бы цепочка запуска функция в axios продолжила работать
	}
)

export default axios;