<template>
	<div class="about-page-component">

		<div class="page-content">

			<div class="container">

				<div class="header">
					<div class="title">Блок "Обо мне"</div>
					<iconed-button
						type="iconed"
						title="Добавить группу"
						v-if="emptyCatIsShow == false"
						@click="emptyCatIsShow = true"
						class="header-round-btn"
					/>
				</div>

				<ul class="skills">
					<li class="item" v-if="emptyCatIsShow">
						<category
							@remove="emptyCatIsShow = false"
							@approve="createCategory"
							empty
						/>
					</li>
					<li class="item" v-for="category in categories" :key="category.id">
						<category :title="category.category" :skills="category.skills"></category>
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import button from "../../components/button"; //импорт компонента
import category from "../../components/category"; //импорт компонента
import { mapActions, mapState } from "vuex";

export default {
	//локальная регисрация компонента
	components: {
		iconedButton: button,
		category,
		// headerPage: header,
	},
	data() {
		return {
			// categories: [], //перевод на vuex
			emptyCatIsShow: false,
		};
	},
	created() {
		this.fetchCategoryAction();
		// this.categories = require("../../data/categories.json");  //перевод на vuex
	},
	computed: {
		...mapState("categories",{
			categories: state => state.data
		})
	},
	methods: {
		...mapActions({
			createCategoryAction: "categories/create",
			fetchCategoryAction: "categories/fetch"
		}),
		async createCategory(categoryTitle) {
			try {
				await this.createCategoryAction(categoryTitle);
				this.emptyCatIsShow = false; //если все успешно то скрываем категорию
			} catch (error) {
				console.log(error.message)
			}
		}
	},
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>