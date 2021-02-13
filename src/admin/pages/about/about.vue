<template>
	<div class="about-page-component">

		<div class="page-content">

			<!-- <div class="container" v-if="categories.length"> -->
			<div class="container">
				<div class="header">
					<div class="title">Блок "Обо мне"</div>
				</div>

				<div class="about-edit">
				<card
					title="Редактирование данных"
				>
					<div v-for="about in abouts" :key="about.id" slot="content" class="about">

							<div class="about-left about-item">
								<dnd
									:imgSrc_="about.photo"
									@onLoadFile='file = $event'
									@onLoadImg='about.photo = $event'

									@onError='onError($event)'
								/>
							</div>
							<div class="about-right about-item">
									<app-input v-model="about.name" title="Имя и Фамилия" class="about-inp"/>
									<app-input v-model="about.description" title="Коротко о себе" fieldType="textarea" class="about-area"/>

									<app-input v-model="about.city" title="Проживаю" class="about-inp"/>
									<app-input v-model="about.age" title="Возраст" class="about-inp"/>
									<app-input v-model="about.birthday" title="Родился" class="about-inp"/>

									<div class="about-btns">
										<appButton title="Отмена" plain @click="aboutNo" />
										<appButton title="СОХРАНИТЬ" @click="aboutYes(about)" />
									</div>
							</div>

					</div>
				</card>
				</div>

			</div>

		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import card from '../../components/Card';
import dnd from "../../components/dnd";
import appButton from "../../components/button";
import appInput from "../../components/input";

import { mapState, mapActions, mapGetters} from 'vuex'
import abouts from "../../store/modules/abouts"; //модуль динамически импортируется и регистрируется

export default {
	//локальная регисрация компонента
	components: {
		card,
		dnd,
		appButton,
		appInput,
	},
	data() {
		return {
			file: {},
			about: {
				id: '',
				photo: '',
				age: '',
				city: '',
				birthday: '',
				name: '',
				description: '',
			}
		};
	},
	methods: {
		...mapActions({
			showTooltip: "tooltips/show",
			fetchAboutsAction: "abouts/fetch",
			edithAboutsAction: "abouts/edit",
		}),
		aboutNo() { //это сделагно в учебных целях
			this.fetchAboutsAction();//vuex-action
			this.file = {}
		},
		aboutYes(about) { //это сделагно в учебных целях
				this.edithAboutsAction({
					...this.about,
					photo: this.file
				});//vuex-action
				this.file = {}
		},
		onError(e) {
			this.showTooltip({ //вызываем туллтип
				text: `${e.text}`,
				type: `${e.type}`
			})
		}
	},
	computed: {
		...mapState('abouts', {
			abouts: state => state.data
		}),

	},
	created() {
		this.$store.registerModule('abouts', abouts); //динамически импортируемый модуль ругистрируется
		this.fetchAboutsAction();//vuex-action
	},
	destroyed() {
		this.$store.unregisterModule('abouts'); //модуль динамически импортируемый отменяет ругистрирацию
	},

};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>