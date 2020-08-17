import Vue from "vue";

const thumbs = {
	props: ['currentWork','works'],
	template: '#preview-thumbs',
	methods: {
		changeActiveItem() {
			// console.log('thumbs -> works ', this.works)
			// console.log('thumbs -> currentWork ', this.currentWork)

			let active = this.$refs['thumbs__item-active'];
			active.forEach(element => {
				element.classList.remove('thumbs__item-active');
			});
		}
	}
}
const btns = {
	template: '#preview-btns',
}
const display = {
	props: ['currentWork','works', 'currentIndex'],
	template: '#preview-display',
	components: {thumbs, btns},
	computed: {
		reverseWorks() {
			// console.log('reverseWorks ',this.works)
			// console.log('reverseWorks ', [...this.works])

			const works = [...this.works];
			// return works.slice(0, 4).reverse()
			return works.slice(0, 4)
		}
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
			return this.currentWork.skills.split(',');
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
		}
	},
	computed: {
		// это свойство внутри компонента определяется как обычное свойство в DATA
		currentWork() {
			return this.works[this.currentIndex]
			//при изменении currentWork будет пересчитываться works
		}
	},
	watch: {
		//шпионаж за currentIndex в DATA
		currentIndex(value) {
			console.log('Vue -> currentIndex ', value)
			this.makeInfiniteLoopFofNdx(value)
		}
	},
	methods: {
		makeInfiniteLoopFofNdx(index) {
			const worksNumber = this.works.length - 1; //общее кол-во
			if (index < 0) this.currentIndex = worksNumber;
			if (index > worksNumber ) this.currentIndex = 0;
		},
		requireImagesToArray(data) {
			return data.map((item)=> {
				const requireImage = require(`../images/content/${item.photo}`).default;
				item.photo = requireImage;
				return item
			})
			//по окончанию будит исправленные данные с правильными путями к картинкам
		},
		slide(direction) {
			console.log(direction)
			const lastItem = this.works[this.works.length - 1];
			switch (direction) {
				case 'prev':
					this.currentIndex--;
					break;
				case 'next':
					this.currentIndex++;
					break;
				default:
					this.currentIndex = direction;
			}
		},
		activeSlideClick(id) {
			console.log('В главном компоненте: ',id)
			let idUp = id - 1;
			this.currentIndex = idUp;
			this.currentWork = this.works[idUp];

			// console.log(el.target)
			// console.log('currentIndex ', this.currentIndex);
			// console.log('VUE2 => currentWork ', this.currentWork);
			// console.log('works ', this.works[idUp]);
		}
	},
	created() {
		const data = require('../data/works.json')
		this.works = this.requireImagesToArray(data);
		// this.currentWork = this.works[this.currentIndex];//ЗАМЕНИЛИ
		// console.log('created() => currentWork',this.currentWork )
		// console.log('created() => currentIndex',this.currentIndex )
	}
})