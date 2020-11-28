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
					<div slot="content" class="about">
						<div class="about-left about-item">
							<dnd
								:imgSrc_="about.photo"
								@onLoadFile='file = $event'
								@onLoadImg='about.photo = $event'
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
									<appButton title="СОХРАНИТЬ" @click="aboutYes" />
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
		aboutNo() {},
		aboutYes() {},
	}

};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>