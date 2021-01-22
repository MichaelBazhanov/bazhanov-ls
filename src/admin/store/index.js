import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import categories from "./modules/categories";
// import skills from "./modules/skills";
// import works from "./modules/works";
// import reviews from "./modules/reviews";
// import abouts from "./modules/abouts";
import user from "./modules/user"; //оставляем статический модуль тк он всегда должен быть
import tooltips from "./modules/tooltips";//оставляем статический модуль тк он всегда должен быть

export default new Vuex.Store({
	modules: {
		categories: () => import("./modules/categories"),
		skills: () => import("./modules/skills"),
		works: () => import("./modules/works"),
		reviews: () => import("./modules/reviews"),
		abouts: () => import("./modules/abouts"),
		user,
		tooltips
	}
})