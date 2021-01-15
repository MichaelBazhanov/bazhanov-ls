<template>
	<div
		v-if="not_dnd"
		:class="['dnd-component', {not_dnd}]"
		>

		<!-- cерый экран юзера-->
		<div :class="['img-load' ]" >
			<template v-if="!imgSrc">
				<div class="user">
					<svg width="91" height="99" viewBox="0 0 91 99" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0)">
							<path d="M45.1702 53.344C45.2644 53.344 45.3586 53.344 45.4717 53.344C45.5094 53.344 45.5471 53.344 45.5848 53.344C45.6413 53.344 45.7167 53.344 45.7732 53.344C51.2946 53.2415 55.7608 51.1298 59.0586 47.0911C66.3137 38.1936 65.1077 22.9408 64.9757 21.4852C64.5046 10.5581 59.7558 5.3303 55.8362 2.89066C52.9153 1.06606 49.5044 0.0820046 45.6978 0H45.5659C45.5471 0 45.5094 0 45.4905 0H45.3775C43.2857 0 39.1776 0.369021 35.2391 2.80866C31.2818 5.24829 26.4576 10.4761 25.9865 21.4852C25.8546 22.9408 24.6485 38.1936 31.9037 47.0911C35.1826 51.1298 39.6487 53.2415 45.1702 53.344ZM31.018 21.9977C31.018 21.9362 31.0368 21.8747 31.0368 21.8337C31.6587 7.1344 41.2505 5.55581 45.3586 5.55581H45.434C45.4717 5.55581 45.5282 5.55581 45.5848 5.55581C50.6728 5.67882 59.3224 7.93394 59.9066 21.8337C59.9066 21.8952 59.9066 21.9567 59.9254 21.9977C59.9443 22.1412 61.2634 36.082 55.2708 43.4214C52.8964 46.3326 49.7306 47.7677 45.5659 47.8087C45.5282 47.8087 45.5094 47.8087 45.4717 47.8087C45.434 47.8087 45.4152 47.8087 45.3775 47.8087C41.2317 47.7677 38.047 46.3326 35.6914 43.4214C29.7177 36.123 30.9991 22.1207 31.018 21.9977Z" fill="white"/>
							<path d="M84.197 78.6425C84.197 78.622 84.197 78.6015 84.197 78.581C84.197 78.417 84.1782 78.253 84.1782 78.0685C84.0651 74.0093 83.8201 64.5172 75.6416 61.4831C75.5851 61.4626 75.5097 61.4421 75.4532 61.4216C66.9543 59.0639 59.8876 53.7336 59.8123 53.6721C58.6628 52.7906 57.0798 53.0981 56.2695 54.3487C55.4592 55.5992 55.7419 57.3213 56.8914 58.2029C57.2117 58.4489 64.7118 64.1277 74.0964 66.7519C78.4872 68.4535 78.9771 73.5582 79.109 78.2325C79.109 78.417 79.109 78.581 79.1279 78.745C79.1467 80.5901 79.0336 83.4398 78.7321 85.0799C75.6793 86.966 63.7131 93.4854 45.5093 93.4854C27.3809 93.4854 15.3393 86.9455 12.2676 85.0594C11.9661 83.4193 11.8342 80.5696 11.8719 78.7245C11.8719 78.5605 11.8907 78.3965 11.8907 78.212C12.0227 73.5377 12.5126 68.4329 16.9034 66.7314C26.2879 64.1072 33.788 58.4079 34.1084 58.1824C35.2579 57.3008 35.5406 55.5787 34.7303 54.3282C33.9199 53.0776 32.337 52.7701 31.1875 53.6516C31.1121 53.7131 24.0831 59.0434 15.5466 61.4011C15.4712 61.4216 15.4147 61.4421 15.3581 61.4626C7.17963 64.5172 6.93465 74.0093 6.82158 78.048C6.82158 78.2325 6.82158 78.3965 6.80274 78.5605C6.80274 78.581 6.80274 78.6015 6.80274 78.622C6.78389 79.6881 6.76505 85.1619 7.76381 87.909C7.95225 88.4421 8.29145 88.8931 8.74372 89.2006C9.30905 89.6106 22.8582 99.0002 45.5281 99.0002C68.1981 99.0002 81.7472 89.5901 82.3126 89.2006C82.746 88.8931 83.104 88.4421 83.2925 87.909C84.2347 85.1824 84.2159 79.7086 84.197 78.6425Z" fill="white"/>
						</g>
						<defs>
							<clipPath id="clip0">
							<rect width="91" height="99" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<appButton title="Добавить фото" plain accept typeAttr="fileWork" @change="onChange" />
			</template>
			<template v-else>
				<div class="user">
					<img :src="imgSrc" alt="pic">
				</div>
				<appButton title="Изменить фото" plain accept typeAttr="fileWork" @change="onChange" />
			</template>
		</div>

		<!-- <hr>
		<pre>{{`imgSrc_ : ${imgSrc_}`}}</pre>
		<pre>{{`imgSrc  : ${imgSrc}`}}</pre>
		<hr> -->

	</div>
	<div
		v-else
		:class="['dnd-component']"
		@dragenter.stop.prevent='dragenter()'
		@dragover.stop.prevent='dragover()'
		@dragleave.stop.prevent='dragleave()'
		@drop.stop.prevent='drop($event)'>

		<!-- синий экран -->
		<div :class="['dnd-img-load', {'dnd-img-bottom': !imgSrc}, {highlight} ]" >
			<img class="dnd-img-bg" :src="imgSrc" alt="dnd-img-bg" v-if="imgSrc">
			<template v-else>
				<div class="dnd-img-text">Перетащите или загрузите для загрузки изображения</div>
				<appButton title="ЗАГРУЗИТЬ" typeAttr="file" @change="onChange" accept/>
			</template>
		</div>
		<appButton v-if="imgSrc" class="dnd-img-change" title="Изменить превью" plain accept typeAttr="fileWork" @change="onChange" />

		<!-- <hr>
		<pre>{{`imgSrc_ : ${imgSrc_}`}}</pre>
		<pre>{{`imgSrc  : ${imgSrc}`}}</pre>
		<hr> -->

	</div>
</template>

<script>
import appButton from "../../components/button";

export default {
	components: {
		appButton,
	},
	props: {
		imgSrc_: {
			type: [String],
			default: ''
		},
		not_dnd: Boolean,
	},
	data() {
		return {
			imgSrc: '',
			highlight: false,
		}
	},
	mounted() {
		if (this.imgSrc_) {
			this.imgSrc = this.imgSrc_;
			this.$emit('onLoadImg', this.imgSrc_); //опракидываем загруженный файл выше в компонет
		}
	},
	watch: {
		imgSrc_: function (value) {
			this.imgSrc = this.imgSrc_;
			this.$emit('onLoadImg', this.imgSrc_); //опракидываем загруженный файл выше в компонет
		}
	},
	methods: {
		onChange(e) {
			//проверка на загрузку файла
			if(e.target.files.length === 0) {
				this.$emit('onError', {text:'Файл не был загружен !', type:'warning'})
				return e.target.value = ''; // для того что бы событие onChange срабатывало каждый раз заного для одного и того же файла img
			}

			let f = e.target.files[0]; //берем файл

			//проверка
			if(f.size >  1572864) {
				this.$emit('onError',  {text:'Размер загружаемого файла больше 1.5 mb !', type:'warning'} )
				return e.target.value = ''; // для того что бы событие onChange срабатывало каждый раз заного для одного и того же файла img
			}

			//проверка
			// (альтернатива атрибут accept='image/*' на элементе input type='file')
			if(f.type.indexOf('image') === -1) {
				this.$emit('onError', {text:'Загруженный файл не является изображением !', type:'warning'} )
				return e.target.value = ''; // для того что бы событие onChange срабатывало каждый раз заного для одного и того же файла img
			}

			this.read(f);
		},
		read(f) { //метод прото описывает работу с с спец обьектом чтения файла => FileReader
			let fr = new FileReader(); //создаем обьект длч чтения этого файла (API браузера)
			fr.readAsDataURL(f); // Читаем blob выбранного файла
			fr.onload = e => { //обработчик на загрузку файла

				this.imgSrc = fr.result;
				this.$emit('onLoadFile', f); //опракидываем загруженный файл выше в компонет
				this.$emit('onLoadImg', fr.result); //опракидываем загруженный картинку выше в компонет

				// console.log('this.imgSrc :',this.imgSrc)
				// console.log('this.imgSrc_ :',this.imgSrc_)

			}
			fr.onerror = e => { //обработчик на ошибку загрузки файла (возникновение когда что то с файлом не так)
				// console.log('Ошибка загрузки файла!')
				this.$emit('onError', {text:'Ошибка загрузки файла !', type:'error'});
			}
			fr.onabort = e => { //обработчик на отмену загрузки файла (возникновение когда недождались загрузки первого а загружаем уже второй)
				// console.log('Отмена загрузки файла!')
				this.$emit('onError', {text:'Отмена загрузки файла !', type:'error'});
			}
			//После того как создали новый FileReader() и через метод readAsDataURL() загрузили в него данные из inputa
			//у FileReader появляется множество свойст от этом файле и одно из них result в ктором содержется base64
			//загруженной картинки.
		},
		dragenter(e) {
			//активируем подсветку CSS
			this.highlight = true;
		},
		dragover(e) {
			//активируем подсветку CSS
			this.highlight = true;
		},
		dragleave(e) {
			//удаляем подсветку CSS
			this.highlight = false;
		},
		drop(e) {
			// console.log(e.dataTransfer) //Объект DataTransfer используется для хранения данных, перетаскиваемых мышью во время операции drag and drop.
			let files = e.dataTransfer.files;//тип FileList хранящий файлы
			files = [...files]; //преобразуем тип FileList в Array (те внутри этого массива хранятся рейльные файлы с DND)

			//проверка
			if(!files[0]) {
				this.$emit('onError', {text:'Файл не был загружен !', type:'warning'});
				return this.highlight = false;
			}

			//проверка
			if(files[0].size >  1572864) {
				this.$emit('onError', {text:'Размер загружаемого файла больше 1.5 mb !', type:'warning'});
				return this.highlight = false;
			}

			//проверка
			// (альтернатива атрибут accept='image/*' на элементе input type='file')
			if(files[0].type.indexOf('image') === -1) {
				this.$emit('onError', {text:'Загруженный файл не является изображением !', type:'warning'});
				return this.highlight = false;
			}

			this.read(files[0]);

			//удаляем подсветку CSS
			this.highlight = false;
		},
	},
}
</script>


<style lang="postcss" src="./dnd.pcss" scoped>
</style>
