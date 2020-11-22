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
								<dnd @onLoadFile='work.photo = $event' :imgSrc_="work.photo"/>
							</div>
							<div class="work-item">
								<div class="work-text">
									<app-input v-model="work.title" title="Название" class="work-inp"/>
									<app-input v-model="work.link" title="Ссылка" class="work-inp"/>
									<app-input v-model="work.description" title="Описание" fieldType="textarea" class="work-area"/>
									<tagsAdder v-model="work.techs"/>
									<div class="work-btns">
										<appButton title="Отмена" plain @click="onNo" />
										<appButton title="СОХРАНИТЬ" @click="onYes" />
									</div>
								</div>
							</div>
						</div>
					</card>
				</div>

				<!-- <pre>{{works}}</pre> -->

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

					<div v-for="work in works" :key="work.id" class="works-wrap">
						<div class="works-item">
							<div class="tags-wrap">
								<img class="item-img" :src="work.photo" :alt="work.photo">
								<!-- <img class="item-img" :src="`${baseURLGetter}/${work.photo}`" :alt="work.photo"> -->

								<div class="item-tags">
									<tag v-for="(item, idx) in work.techs.split(', ')" :key="idx" :title="item" class="tipography-works" />
								</div>
							</div>
							<div class="item-wrap">
								<h2 class="item-title">{{work.title}}</h2>
								<p  class="item-text" >{{work.description}}</p>
								<linkA class="item-link" :href="work.link" target="_blank">
									{{work.link}}
								</linkA>
								<div class="item-btns">
									<icon @click="editWork(work)" title="Править" symbol="pencil" />
									<icon @click="deleteWork" title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>

					<div style="display: none;">
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

import { mapActions, mapState, mapGetters } from 'vuex';

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
			work: {
				title: '',
				techs: '',
				photo: '',
				link: '',
				description: '',
			}
		};
	},
	created() {
		this.fetchWorksAction();
	},
	computed: {
		...mapState("works", {
			works: state => state.data
		}),

		workPic() {//реальная картинка через JavaScript !!!
			return require("../../../images/content/slider-0.jpg").default
		}
	},
	methods: {
		...mapActions({
			fetchWorksAction: "works/fetch",
			addWorkAction: "works/add"
		}),
		onClick() {
			console.log('onClick')
		},
		onYes() {
			this.edit = false;
			console.log('onYes')
			this.addWorkAction({...this.work});//vuex-action

		},
		onNo() {
			console.log('onNo')
			this.edit = false;
		},
		editWork(work) {//редактирование work
			this.edit = true;
			this.work = {
				...work,
			}//отображаем как ТЕКУЩИЙ work
		},
		deleteWork() {},

	},



};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>