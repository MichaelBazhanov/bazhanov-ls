import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import works from "./pages/works.vue";
import about from "./pages/about.vue";
import reviews from "./pages/reviews.vue";


const routes = [
	{
		path: "/",
		component: works
	},
	{
		path: "/works",
		component: works
	},
	{
		path: "/about",
		component: about
	},
	{
		path: "/reviews",
		component: reviews
	},
	// {
	// 	path: "/view/:todo",
	// 	component: about
	// },
];//маршруты пути

// export default new VueRouter({ mode: 'history', routes,})
export default new VueRouter({routes})
