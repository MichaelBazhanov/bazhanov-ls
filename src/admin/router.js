import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import about from "./pages/about";
import login from "./pages/login";
// import works from "./pages/works.vue";
// import reviews from "./pages/reviews.vue";


const routes = [
	{
		path: "/",
		component: about
	},
	{
		path: "/login",
		component: login
	},
];//маршруты пути

// export default new VueRouter({ mode: 'history', routes,})
export default new VueRouter({routes})
