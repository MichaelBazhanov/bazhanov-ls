<template>
	<div class="works-page-component">

		<div class="page-content">

			<div class="container">
				<div class="header">
					<div class="title">Блок "Работы"</div>
				</div>

				<div class="work-edit" v-if="edit">
					<card
						title="Редактирование работы"
					>
						<div slot="content" class="work">
							<div class="work-item">
								<dnd @onLoadFile='works.photo = $event'/>
							</div>
							<div class="work-item">
								<div class="work-text">
									<app-input v-model="works.title" title="Название" class="work-inp"/>
									<app-input v-model="works.link" title="Ссылка" class="work-inp"/>
									<app-input v-model="works.description" title="Описание" fieldType="textarea" class="work-area"/>
									<tagsAdder v-model="works.techs"/>
									<div class="work-btns">
										<appButton title="Отмена" plain @click="onNo" />
										<appButton title="СОХРАНИТЬ" @click="onYes" />
									</div>
								</div>
							</div>
						</div>
					</card>
				</div>

				<div class="works">
					<div class="works-wrap">
						<div class="works-item">
							<squareButton
								type="square"
								title="Добавить работу"
								@click="edit = true"
							/>
						</div>
					</div>

					<div class="works-wrap">
						<div class="works-item">
							<div class="tags-wrap">
								<img class="item-img" :src="workPic" alt="pic">

								<div class="item-tags">
									<tag title="HTML" class="tipography-works" />
									<tag title="CSS" class="tipography-works" />
									<tag title="JS" class="tipography-works" />
								</div>
							</div>
							<div class="item-wrap">
								<h2 class="item-title">Сайт школы образования</h2>
								<p  class="item-text" >Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!</p>
								<linkA class="item-link" href="http://loftschool.ru" target="_blank">
									http://loftschool.ru
								</linkA>
								<div class="item-btns">
									<icon title="Править" symbol="pencil" />
									<icon title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>

					<div class="works-wrap">
						<div class="works-item">
							<img class="item-img" :src="workPic" alt="pic">
							<div class="item-wrap">
								<h2 class="item-title">Сайт школы образования</h2>
								<p  class="item-text" >Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!</p>
								<linkA class="item-link" href="http://loftschool.ru" target="_blank">
									http://loftschool.ru
								</linkA>
								<div class="item-btns">
									<icon title="Править" symbol="pencil" />
									<icon title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>

					<div class="works-wrap">
						<div class="works-item">
							<img class="item-img" :src="workPic" alt="pic">
							<div class="item-wrap">
								<h2 class="item-title">Сайт школы образования</h2>
								<p  class="item-text" >Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!</p>
								<linkA class="item-link" href="http://loftschool.ru" target="_blank">
									http://loftschool.ru
								</linkA>
								<div class="item-btns">
									<icon title="Править" symbol="pencil" />
									<icon title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<!-- <div class="container" v-if="!categories.length && emptyCatIsShow === false">
				Нет данных
			</div> -->
		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import card from "../../components/Card";
import dnd from "../../components/dnd";
import appButton from "../../components/button";
import squareButton from "../../components/button/types/squareBtn";
import appInput from "../../components/input";
import tagsAdder from "../../components/tagsAdder";
import linkA from "../../components/link";
import icon from "../../components/icon";
import tag from "../../components/tag";

import { mapActions, mapState } from 'vuex';

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		tagsAdder,
		squareButton,
		linkA,
		icon,
		tag,
		dnd,
	},
	data() {
		return {
			edit: false,
			works: {
				photo: [],
				title: '',
				link: '',
				description: '',
				techs: '',
			}
		};
	},
	created() {
		this.fetchWorksAction();
	},
	methods: {
		...mapActions({
			fetchWorksAction: "works/fetch"
		}),
		// ...mapActions({
		// 	showTooltip: "tooltips/show",
		// 	createCategoryAction: "categories/create",
		// 	fetchCategoryAction: "categories/fetch",
		// 	removeCategoryAction: "categories/remove",
		// 	editCategoryAction: "categories/edit",
		// 	addSkillAction: "skills/add",
		// 	removeSkillAction: "skills/remove",
		// 	editSkillAction: "skills/edit",
		// }),
		onClick() {
			console.log('onClick')
		},
		onYes() {
			console.log('onYes')
			console.log(this.works)
			this.edit = false;
		},
		onNo() {
			console.log('onNo')
			this.edit = false;
		},

	},
	computed: {
		// ...mapState("works",{
		// 	works: state => state.works
		// }),
		workPic() {
			return require("../../../images/content/slider-0.jpg").default
		}
	},


};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>