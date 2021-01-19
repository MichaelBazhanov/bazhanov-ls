import Vue from "vue";

import axios from 'axios';
import config from '../../env.paths.json'; //файлик со всеми веб путями в проекте
import store from '../admin/store'

axios.defaults.baseURL = config.BASE_URL;

const thumbs = {
	props: ['currentWork','works'],
	template: '#preview-thumbs',
	methods: {
		changeActiveItem() {
			let active = this.$refs['thumbs__item-active'];
			active.forEach(element => {
				element.classList.remove('thumbs__item-active');
			});
		}
	},
	mounted() {
		//отправляем реф thumbs вверх
		let thumbs = this.$refs['thumbs'];
		this.$emit('thumbs', thumbs);
	}
}
const btns = {
	props: ['isEnd', 'isBegin'],
	template: '#preview-btns',
}
const display = {
	props: ['currentWork','works', 'currentIndex', 'isEnd', 'isBegin'],
	template: '#preview-display',
	components: {thumbs, btns},
	computed: {
		reverseWorks() {
			const works = [...this.works];
			return works
		}
	},
	//смотрит этот компонент все прил пропы
	mounted() {
		console.log('mounted->display->currentWork: ', this.currentWork )
		console.log('mounted->display->works: ', this.works )
		console.log('mounted->display->currentIndex: ', this.currentIndex )
		console.log('mounted->display->isEnd: ', this.isEnd )
		console.log('mounted->display->isBegin: ', this.isBegin )
	},
	created() {
		console.log('created->display->currentWork: ', this.currentWork )
		console.log('created->display->works: ', this.works )
		console.log('created->display->currentIndex: ', this.currentIndex )
		console.log('created->display->isEnd: ', this.isEnd )
		console.log('created->display->isBegin: ', this.isBegin )
	}
}
const tag = {
	props: ['tags'],
	template: '#preview-tags',
}
const info = {
	props: ['currentWork'],
	template: '#preview-info',
	components: {tag},
	computed: {
		tagsArray() {
			return this.currentWork.techs.split(',');
		}
	}
}

new Vue({
	el: '#works-component',
	template: '#preview-container',
	components: {display, info},
	data() {
		return {
			works: [],
			currentIndex: 0,
			thumbLink: [],
		}
	},
	computed: {
		// это свойство внутри компонента определяется как обычное свойство в DATA
		currentWork() {
			// console.log('computed : this.works :', this.works)
			// console.log('computed : currentWork :', this.works[this.currentIndex])
			return this.works[this.currentIndex]
			//при изменении currentWork будет пересчитываться works
		},
		quantityWorks() {//количество элементов в WORKS
			return this.works.length - 1;
		},
		isEnd() {
			return this.currentIndex ===  this.works.length - 1;
		},
		isBegin() {
			return this.currentIndex ===  0;
		}
	},
	watch: {
		//шпионаж за currentIndex в DATA
		currentIndex(value) {
			// console.log(value,'-------------------')
			this.makeInfiniteLoopFofNdx(value)
		}
	},
	methods: {
		makeInfiniteLoopFofNdx(index) {
			const worksNumber = this.works.length - 1; //общее кол-во
			if (index < 0) this.currentIndex = worksNumber;
			if (index > worksNumber ) this.currentIndex = 0;
		},
		slide(direction) {

			switch (direction) {
				case 'prev':
					this.prev();
					break;
				case 'next':
					this.next();
					break;
				default:
					this.click(direction)
			}
		},
		click(direction) {
			// console.log(direction)
			this.currentIndex = direction;
			if (this.currentIndex == this.quantityWorks) {

			}
		},
		next() {
			let thumbs = this.thumbLink;
			this.currentIndex++;
			// console.log('this.currentIndex ', this.currentIndex)
			// console.log('this.quantityWorks', this.quantityWorks)

			//ГЛАВНОЕ УСЛОВИЕ
			if (this.currentIndex == this.quantityWorks) { // 4==4
				// console.log('Я последний next')
				if (this.media(1800)) {
					thumbs.style.transform = `translate3d(-178px,0px,0px)`;
				} else {
					thumbs.style.transform = `translate3d(-120px,0px,0px)`;
				}
			}
		},
		prev() {
			let thumbs = this.thumbLink;
			this.currentIndex--;
			// //ГЛАВНОЕ УСЛОВИЕ
			if (this.currentIndex === 0) { //0 == 0
				// console.log('Я последний prev')
				thumbs.style.transform = `translate3d(0px,0px,0px)`;
			}
		},
		thumbs(el) {
			this.thumbLink = el;
		},
		activeSlideClick(id) {
			// console.log('В главном компоненте: ',id)
			let idUp = id - 1;
			this.currentIndex = idUp;
			this.currentWork = this.works[idUp];
		},
		media(px) {
			if (window.matchMedia(`(min-width: ${px}px)`).matches) { //1800px
				// console.log('после 1800px')
				return true
			} else {
				// console.log('до 1800px')
				return false
			}
		},
		requireImagesToArray(data) { //здесь мы берем реальную физическую картинку и кешируем её в переменную в JS коде, дабы выставить в SRC
			return data.map((item)=> {
				const requireImage = require(`../images/content/${item.photo}`).default;
				item.photo = requireImage;
				return item
			})
			//по окончанию будит исправленные данные с правильными путями к картинкам
		},
	},
	async created() {
		const data = require('../data/works.json'); //старое
		console.log('Данные из файла: ',data)
		// this.works = this.requireImagesToArray(data); //старое
		//// this.currentWork = this.works[this.currentIndex];//ЗАМЕНИЛИ

		//получаем id пользователя из vuex
		const user_id = store.getters['user/userId'];
		const response = await axios.get(`/works/${user_id}`);//загружаем данные с сервера вместо works.json

		//переписываем пути картинок obj.photo
		response.data.forEach(obj => {
			obj.photo = config.BASE_URL+'/'+obj.photo
		})

		console.log('Мой ответ: ', response.data)
		this.works = response.data;
		console.log('Мой ответ: this.works ', this.works)
		// console.log('123this.currentWork:',this.currentWork)
	},
	mounted() {
		console.log('Вывод - mounted', this.works)
	}

})