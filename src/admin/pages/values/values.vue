<template>
	<div class="values-page-component">

		<div class="page-content">

			<!-- <div class="container" v-if="categories.length"> -->
			<div class="container">
				<div class="header">
					<div class="title">Блок "Навыки"</div>
					<iconed-button
						type="iconed"
						title="Добавить группу"
						v-if="emptyCatIsShow == false"
						@click="emptyCatIsShow = true"
						class="header-round-btn"
					/>
				</div>

				<ul class="skills">
					<transition name="fade">
						<li class="item" v-if="emptyCatIsShow">
								<category
									@approve="createCategory"
									@remove="emptyCatIsShow = false"
									empty
								/>
						</li>
					</transition>
					<li class="item" v-for="category in categories" :key="category.id">
						<category
							:title="category.category"
							:skills="category.skills"
							@create-skill="createSkill($event, category.id)"
							@remove-skill="removeSkill"
							@edit-skill="editSkill"
							@remove-category="removeCategory(category)"
							@edit-category="editCategory($event, category)"
						/>
					</li>
				</ul>
			</div>
			<!-- <div class="container" v-else>
				loading ...
			</div> -->
			<!-- <div class="container" v-if="!categories.length && emptyCatIsShow === false">
				Нет данных
			</div> -->
		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import button from "../../components/button"; //импорт компонента
// import category from "../../components/category"; //импорт компонента
import { mapActions, mapState } from "vuex";
import categories from "../../store/modules/categories"; //модуль динамически импортируется и регистрируется
import skills from "../../store/modules/skills"; //модуль динамически импортируется и регистрируется

export default {
	//локальная регисрация компонента
	components: {
		iconedButton: button,
		category: () => import("../../components/category") //сделал динамический импорт компонента
	},
	data() {
		return {
			// categories: [], //перевод на vuex
			emptyCatIsShow: false,
		};
	},
	created() {
		this.$store.registerModule('categories', categories); //динамически импортируемый модуль ругистрируется
		this.$store.registerModule('skills', skills); //динамически импортируемый модуль ругистрируется
		this.fetchCategoryAction();
		// this.categories = require("../../data/categories.json");  //перевод на vuex
	},
	destroyed() {
		this.$store.unregisterModule('categories'); //модуль динамически импортируемый отменяет ругистрирацию
		this.$store.unregisterModule('skills'); //модуль динамически импортируемый отменяет ругистрирацию
	},
	computed: {
		...mapState("categories",{
			categories: state => state.data
		})
	},
	methods: {
		...mapActions({
			showTooltip: "tooltips/show",
			createCategoryAction: "categories/create",
			fetchCategoryAction: "categories/fetch",
			removeCategoryAction: "categories/remove",
			editCategoryAction: "categories/edit",
			addSkillAction: "skills/add",
			removeSkillAction: "skills/remove",
			editSkillAction: "skills/edit",
		}),
		async createSkill(skill, categoryId) {
			try {
				//-------------------------------------------
				const newSkill = {
					...skill,
					category: categoryId
				}

				await this.addSkillAction(newSkill);

				//сброс данных
				skill.title = '';
				skill.percent = '';
				//-------------------------------------------

				this.showTooltip({
					text: `Добавлен навык ${newSkill.title} на ${newSkill.percent}%`,
					type: "success"
				})

			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}
		},
		removeSkill(skill) {
			try {
				//-------------------------------------------
				this.removeSkillAction(skill);
				//-------------------------------------------

				this.showTooltip({
					text: `Удален навык ${skill.title} на ${skill.percent}%`,
					type: "success"
				})

			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}
		},
		async editSkill(skill) {
			try {
				//-------------------------------------------
				await this.editSkillAction(skill);
				skill.editmode = false;
				//-------------------------------------------

				this.showTooltip({
					text: `Переименован навык ${skill.title} на ${skill.percent}%`,
					type: "success"
				})

			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}
		},
		async createCategory(categoryTitle) {
			try {
				//-------------------------------------------
				await this.createCategoryAction(categoryTitle);
				this.emptyCatIsShow = false; //если все успешно то скрываем категорию
				//-------------------------------------------

				this.showTooltip({
					text: `Добавлена группа ${categoryTitle}`,
					type: "success"
				})
			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}
		},
		removeCategory(category) {
			try {
				//-------------------------------------------
				this.removeCategoryAction(category);
				//-------------------------------------------

				this.showTooltip({
					text: `Удалена группа ${category.category}`,
					type: "success"
				})
			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}
			// console.log('remove -> about.vue', categoryId)
		},
		editCategory(categoryTitle, category) {
			try {
				//-------------------------------------------
				const newCategory = {
					...category,
					category: categoryTitle
				}
				this.editCategoryAction(newCategory);
				//-------------------------------------------

				this.showTooltip({
					text: `Переименована группа ${category.category} в ${categoryTitle}`,
					type: "success"
				})

			} catch (error) {
				this.showTooltip({
					text: error.message,
					type: "error"
				})
			}

		}
	},
};
</script>

<style lang="postcss" scoped src="./values.pcss"></style>