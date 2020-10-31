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
								<appButton class="work-img-change" title="Изменить превью" plain @click="onClick" />
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
				<div class="works">
					<div class="works-item">
						<squareButton
							type="square"
							title="Добавить работу"
							@click="onClick"
						/>
					</div>
					<div class="works-item">
							<img class="item-img" :src="workPic" alt="pic">
						<div class="item-wrap">
							<h2 class="item-title">Сайт школы образования</h2>
							<p  class="item-text" >Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!</p>
							<a class="item-link" href="#">http://loftschool.ru</a>
						</div>
					</div>
					<div class="works-item">1</div>
					<div class="works-item">1</div>
					<div class="works-item">1</div>
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
import appButton from "../../components/button";
import squareButton from "../../components/button/types/squareBtn";
import appInput from "../../components/input";
import tagsAdder from "../../components/tagsAdder";

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		tagsAdder,
		squareButton,
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
	},
	computed: {
		workPic() {
			return require("../../../images/content/slider-0.jpg").default
		}
	}

};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>