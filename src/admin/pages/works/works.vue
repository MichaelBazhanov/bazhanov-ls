<template>
	<div class="works-page-component">

		<div class="page-content">

			<div class="container">
				<div class="header">
					<div class="title">Блок "Работы"</div>
				</div>

				<transition name="fade">
					<div class="work-edit" v-if="editNewWork || editOldWork">
						<card
							title="Редактирование работы"
						>
							<div slot="content" class="work">
								<div class="work-item">
									<dnd
										:imgSrc_="work.photo"
										@onLoadFile='file = $event'
										@onLoadImg='work.photo = $event'

										@onError='onError($event)'
									/>
								</div>
								<div class="work-item">
									<div class="work-text">
										<app-input v-model="work.title" title="Название" class="work-inp"
											:errorMessage="validation.firstError('work.title')"/>
										<app-input v-model="work.link" title="Ссылка" class="work-inp"
											:errorMessage="validation.firstError('work.link')"/>
										<app-input v-model="work.description" title="Описание" fieldType="textarea" class="work-area"
											:errorMessage="validation.firstError('work.description')"/>
										<tagsAdder v-model="work.techs"
											:errorMessage="validation.firstError('work.techs')" />
										<div class="work-btns">
											<appButton title="Отмена" plain @click="workNo" />
											<appButton title="СОХРАНИТЬ" @click="workYes" />
										</div>
									</div>
								</div>
							</div>
						</card>
					</div>
				</transition>

				<div class="works">
					<div class="works-wrap">
						<div class="works-item">
							<squareButton
								type="square"
								title="Добавить работу"
								@click="addWork"
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
									<icon @click="deleteWork(work)" title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

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

import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';

import { mapActions, mapState } from 'vuex';
import works from "../../store/modules/works"; //модуль динамически импортируется и регистрируется

export default {
	mixins: [ValidatorMixin],
	validators: {
		"work.title": value => {
			return Validator.value(value).required('Введите навзание работы!')
		},
		"work.link": value => {
			return Validator.value(value).required('Введите ссылку!')
		},
		"work.description": value => {
			return Validator.value(value).required('Введите описание!')
		},
		"work.techs": value => {
			return Validator.value(value).required('Введите теги!')
		},
	},
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
			file: {},
			editNewWork: false,
			editOldWork: false,
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
		this.$store.registerModule('works', works); //динамически импортируемый модуль ругистрируется
		this.fetchWorksAction();//vuex-action
	},
	destroyed() {
		this.$store.unregisterModule('works'); //модуль динамически импортируемый отменяет ругистрирацию
	},
	computed: {
		...mapState("works", {
			works: state => state.data
		}),
		// workPic() {//реальная картинка через JavaScript !!!
		// 	return require("../../../images/content/slider-0.jpg").default
		// <img class="item-img" :src="workPic" alt="pic"> в HTML
		// }
	},
	methods: {
		...mapActions({
			showTooltip: "tooltips/show",
			fetchWorksAction: "works/fetch",
			addWorkAction: "works/add",
			editWorkAction: "works/edit",
			removeWorkAction: "works/remove",
		}),
		async workYes() {
			console.log('workYes')
			if( await this.$validate() == false) return;///////////////////////////////////////////////////////////////////////////
			if( !this.file.size) return;///////////////////////////////////////////////////////////////////////////

			console.log('1')
			if (this.editNewWork) {
				this.editNewWork = false;
				await this.addWorkAction({
					...this.work,
					photo: this.file
				});//vuex-action
				this.file = {}
				this.showTooltip({
					text: `Добавлена новая работа ${this.work.title}`,
					type: "success"
				})
			}

			if (this.editOldWork) {
				this.editOldWork = false;
				await this.editWorkAction({
					...this.work,
					photo: this.file
				});//vuex-action
				this.file = {}
				this.showTooltip({
					text: `Изменена старая работа ${this.work.title}`,
					type: "success"
				})
			}

			this.claerCurrentWork()//methods
		},
		async workNo() {
			// console.log('workNo')
			if( await this.$validate() == false) return;///////////////////////////////////////////////////////////////////////////

			if (this.editNewWork) {
				this.editNewWork = false;
				this.file = {}
				this.showTooltip({
					text: `Отменено сохранение изменений в новой работе ${this.work.title}`,
					type: "success"
				})
			}

			if (this.editOldWork) {
				this.editOldWork = false;
				this.file = {}
				this.showTooltip({
					text: `Отменено сохранение изменений в старой работе ${this.work.title}`,
					type: "success"
				})
			}

			this.claerCurrentWork()//methods
		},
		addWork() {
			this.editNewWork = true;

			this.claerCurrentWork()//methods
		},
		editWork(work) {//редактирование work
			this.editOldWork = true;
			// this.work = work
			this.work = {
				...work,
			}//отображаем как ТЕКУЩИЙ work
		},
		deleteWork(work) {
			this.editNewWork = false;
			this.editOldWork = false;

			this.removeWorkAction(work)//vuex-action

			this.claerCurrentWork()//methods
		},
		claerCurrentWork() {
			//очищаем work все поля
			Object.keys(this.work).forEach(e => this.work[e] = '')
		},
		onError(e) {
			this.showTooltip({ //вызываем туллтип
				text: `${e.text}`,
				type: `${e.type}`
			})
		}

	},



};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>