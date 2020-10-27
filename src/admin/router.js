import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import header from "./components/header";
import login from "./pages/login";
import about from "./pages/about";
import values from "./pages/values";
import reviews from "./pages/reviews";
import works from "./pages/works";


const routes = [
	{
		path: "/",
		components: {
			header: header,
			default: about,
		}
	},
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
		path: "/login",
		component: login
	},
];//маршруты пути

// export default new VueRouter({ mode: 'history', routes,})
export default new VueRouter({routes})
