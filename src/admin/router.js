import Vue from 'vue'
import VueRouter from 'vue-router'
import $axios from 'axios'
import store from './store'

Vue.use(VueRouter)

import header from "./components/header";
import login from "./pages/login";
import about from "./pages/about";
import values from "./pages/values";
import reviews from "./pages/reviews";
import works from "./pages/works";


const routes = [
	{
		path: "/values",
		components: {
			header: header,
			default: values,
		}
	},
	{
		path: "/about",
		components: {
			header: header,
			default: about,
		}
	},
	{
		path: "/reviews",
		components: {
			header: header,
			default: reviews,
		}
	},
	{
		path: "/works",
		components: {
			header: header,
			default: works,
		}
	},
	{
		path: "/",
		component: login,
		meta: {
			public: true
		}
	},
	{
		path: "/login",
		component: login,
		meta: {
			public: true
		}
	},
];//маршруты пути

// export default new VueRouter({ mode: 'history', routes,})
// export default new VueRouter({routes}) //origin
const router = new VueRouter({routes});
export default router;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//создаем новый экземпляр axios для проверки истекло ли время текущего токена для текущего пользователя?
//(при этом не используем старый экземпляр axios потому что он бы просто на 401 ошибке рефрешнул бы токен и мы бы ничего не поняли бы)
const guard = $axios.create({
	baseURL: 'https://webdev-api.loftschool.com'
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Защита админки от неавторизованных пользователей
router.beforeEach( async (to, from, next) => { //beforeEach вызывается поле того как полностью отработает компонент LOGIN
	const isPublicRoute = to.matched.some( record => record.meta.public);//определяем публичный/не публичный путь по свойству meta в объектах routes
	const isUserLoggedIn = store.getters['user/userIsLoggedIn']; //получаем getter 'из вне' самого store =>из store мы возьмем нужный нам getter

	if(isPublicRoute === false && isUserLoggedIn === false) { //если путь не публичный и пользователь залогинен не был
		//здесь проверим является ли у нас текущий token действительным
		const token = localStorage.getItem('token');//сам token устанавливает компонент login

		guard.defaults.headers["Authorization"] = `Bearer ${token}`; //в заголовок ставим сохраненный token и пытаемся выполнить

		try { //ЗАЛОГИН
			const response = await guard.get('/user'); //если возвращает ошибку с текущим token то вываливаемся в catch ниже
			//если все хорошо то
			store.dispatch('user/login', await response.data.user); // в store, в модуле user возбуждаем actions и складываем данные во VUEX
			//user залогинен, продолжим рендеринг страницы
			next();

		} catch(error) { //РАЗЛОГИН
			router.replace('/login');
			localStorage.removeItem('token');

		}

	} else { //если route публичный или пользователь уже в системе то покажем ему страничку
		next()
	}

	// const token = localStorage.getItem('token');//получаем токен авторизации

	// if(isPublicRoute) { //если маршрут публичный
	// 	localStorage.removeItem('token') //удаляем токен - РАЗЛОГИНИВАЕМСЯ
	// 	next(); //разрешает переход

	// } else { //если маршрут не публичный и есть токен (работоспособность token'a будит проверена на запросе /user )
	// 	$axios.defaults.headers["Authorization"] = `Bearer ${token}`; //в заголовок ставим сохраненный token, если он не действительный то
	// 	//  запрос /user вылетает на catch()

	// 	try {
	// 		const response = await $axios.get("https://webdev-api.loftschool.com/user");
	// 		next(); //разрешает переход

	// 	} catch(e) {//здесь нас РАЗЛОГИНИВАЕТ (те в axios в заголовке нету действующего token при обращении к серверу)
	// 		// console.error(e, 'not authorized')
	// 		localStorage.removeItem('token') //удаляем токен - РАЗЛОГИНИВАЕМСЯ
	// 		next('/login')

	// 	}
	// }

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// if(!isPublicRoute && !token) { //если маршрут не публичный и нет токена
	// 	$axios.defaults.headers["Authorization"] = `Bearer ${token}`; //в заголовок ставим сохраненный token, если он не действительный то
	// 	//  запрос /user вылетает на catch()

	// 	try {
	// 		const response = await $axios.get("https://webdev-api.loftschool.com/user");
	// 		localStorage.setItem('token', response.data.token);//устанавливаем токен
	// 		next(); //разрешает переход

	// 	} catch(e) {//здесь нас РАЗЛОГИНИВАЕТ (те в axios в заголовке нету действующего token при обращении к серверу)
	// 		// console.error(e, 'not authorized')
	// 		localStorage.removeItem('token') //удаляем токен
	// 		// router.replace('/login') // или можно next('/')
	// 		next('/')
	// 	}

	// } else {
	// 	next(); //разрешает переход
	// }
})
