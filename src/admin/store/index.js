import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import categories from "./modules/categories";
import skills from "./modules/skills";
import works from "./modules/works";
import reviews from "./modules/reviews";
import abouts from "./modules/abouts";
import user from "./modules/user";
import tooltips from "./modules/tooltips";

export default new Vuex.Store({
	modules: { categories: () => import("./modules/categories"), skills, works, reviews, abouts, user, tooltips }
})