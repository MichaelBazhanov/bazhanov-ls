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
							<form
								class="work-item"
								@submit.prevent
								@dragenter.stop.prevent='dragenter()'
								@dragover.stop.prevent='dragover()'
								@dragleave.stop.prevent='dragleave()'
								@drop.stop.prevent='drop($event)'>

								<!-- синий экран -->
								<div :class="['work-img-load', {'work-img-bottom': !imgSrc}, {highlight} ]" >
									<img class="img-bg" :src="imgSrc" alt="img-bg" v-if="imgSrc">
									<template v-else>
										<div class="img-text">Перетащите или загрузите для загрузки изображения</div>
										<appButton title="ЗАГРУЗИТЬ" typeAttr="file" @change="onChange" accept/>
									</template>
								</div>
								<appButton v-if="imgSrc" class="work-img-change" title="Изменить превью" plain accept typeAttr="fileWork" @change="onChange" />
							</form>
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
					<div class="works-wrap">
						<div class="works-item">
							<squareButton
								type="square"
								title="Добавить работу"
								@click="onClick"
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
import appButton from "../../components/button";
import squareButton from "../../components/button/types/squareBtn";
import appInput from "../../components/input";
import tagsAdder from "../../components/tagsAdder";
import linkA from "../../components/link";
import icon from "../../components/icon";
import tag from "../../components/tag";

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
	},
	data() {
		return {
			tags: "",
			edit: true,
			imgSrc: '',
			highlight: false,
		};
	},
	methods: {
		onChange(e) {
			//проверка на загрузку файла
			if(e.target.files.length === 0) return

			let f = e.target.files[0]; //берем файл

			//проверка
			if(f.size >  1572864) { console.warn('Размер загружаемого файла больше 1.5 mb'); return}

			//проверка
			if(f.type.indexOf('image') === -1) { console.warn('Загруженный файл не является изображением') ; return }
			// (альтернатива атрибут accept='image/*' на элементе input type='file')

			this.read(f);
		},
		read(f) { //метод прото описывает работу с с спец обьектом чтения файла => FileReader
			let fr = new FileReader(); //создаем обьект длч чтения этого файла
			fr.readAsDataURL(f); // Читаем blob выбранного файла
			fr.onload = e => {
				this.imgSrc = fr.result;
			}
			//После того как создали новый FileReader() и через метод readAsDataURL() загрузили в него данные из inputa
			//у FileReader появляется множество свойст от этом файле и одно из них result в ктором содержется base64
			//загруженной картинки.
		},
		onClick() {
			console.log('Сработал метод onClick()')
		},
		dragenter(e) {
			console.log('dragenter')
			console.log(e)
			//активируем подсветку CSS
			this.highlight = true;
		},
		dragover(e) {
			console.log('dragover')
			console.log(e)
			//активируем подсветку CSS
			this.highlight = true;
		},
		dragleave(e) {
			console.log('dragleave')
			console.log(e)
			//удаляем подсветку CSS
			this.highlight = false;
		},
		drop(e) {
			console.log('drop')
			// console.log(e)
			// console.log(e.dataTransfer) //Объект DataTransfer используется для хранения данных, перетаскиваемых мышью во время операции drag and drop.
			let files = e.dataTransfer.files;//тип FileList хранящий файлы
			files = [...files]; //преобразуем тип FileList в Array (те внутри этого массива хранятся рейльные файлы с DND)

			//проверка
			if(!files[0]) { console.warn('Вы не загрузили файл'); this.highlight = false; return}

			//проверка
			if(files[0].size >  1572864) { console.warn('Размер загружаемого файла больше 1.5 mb'); this.highlight = false; return}

			//проверка
			if(files[0].type.indexOf('image') === -1) { console.warn('Загруженный файл не является изображением') ; this.highlight = false; return }
			// (альтернатива атрибут accept='image/*' на элементе input type='file')

			this.read(files[0]);

			//удаляем подсветку CSS
			this.highlight = false;
		},
	},
	computed: {
		workPic() {
			return require("../../../images/content/slider-0.jpg").default
		}
	}

};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>