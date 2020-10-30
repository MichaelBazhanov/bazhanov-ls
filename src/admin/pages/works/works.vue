<template>
	<div class="works-page-component">

		<div class="page-content">

			<div class="container">
				<div class="header">
					<div class="title">Блок "Работы"</div>
				</div>
				<div class="work-edit">
					<card
						title="Редактирование работы"
					>
						<div slot="content" class="work">
							<div class="work-item">
								<div class="work-img-load">
									<div class="img-text">Перетащите или загрузите для загрузки изображения</div>
									<appButton title="ЗАГРУЗИТЬ" typeAttr="file" @change="onChange" />
								</div>
							</div>
							<div class="work-item">
								<div class="work-text">
									<app-input title="Название" class="work-inp"/>
									<app-input title="Ссылка" class="work-inp"/>
									<app-input title="Описание" fieldType="textarea" class="work-area"/>
									<tagsAdder v-model="tags" />
									<div class="work-btns">
										<appButton title="Отмена" plain @click="onClick" />
										<appButton title="СОХРАНИТЬ" @click="onClick" />
									</div>
								</div>
							</div>
						</div>
					</card>
				</div>
				<div class="works">000</div>

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
import appButton from "../../components/button";
import appInput from "../../components/input";
import tagsAdder from "../../components/tagsAdder";

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		tagsAdder,
	},
	data() {
		return {
			tags: "",
		};
	},
	methods: {
		onChange() {
			console.log('Сработал метод onChange()')
		},
		onClick() {
			console.log('Сработал метод onClick()')
		}
	}

};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>