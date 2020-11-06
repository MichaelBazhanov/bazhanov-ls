<template>
	<form
		class="dnd-component"
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
</template>

<script>
import appButton from "../../components/button";

export default {
	components: {
		appButton,
	},
	data() {
		return {
			imgSrc: '',
			highlight: false,
		}
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
			let fr = new FileReader(); //создаем обьект длч чтения этого файла (API браузера)
			fr.readAsDataURL(f); // Читаем blob выбранного файла
			fr.onload = e => {
				this.imgSrc = fr.result;
				this.$emit('loadimg', this.imgSrc); //опракидываем одрес картинки выше
			}
			//После того как создали новый FileReader() и через метод readAsDataURL() загрузили в него данные из inputa
			//у FileReader появляется множество свойст от этом файле и одно из них result в ктором содержется base64
			//загруженной картинки.
		},
		dragenter(e) {
			// console.log('dragenter')
			// console.log(e)

			//активируем подсветку CSS
			this.highlight = true;
		},
		dragover(e) {
			// console.log('dragover')
			// console.log(e)

			//активируем подсветку CSS
			this.highlight = true;
		},
		dragleave(e) {
			// console.log('dragleave')
			// console.log(e)

			//удаляем подсветку CSS
			this.highlight = false;
		},
		drop(e) {
			// console.log('drop')
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
}
</script>


<style lang="postcss" src="./dnd.pcss" scoped>
</style>
