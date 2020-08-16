import Vue from "vue";

const thumbs = {
	props: ['currentWork','works'],
	template: '#preview-thumbs',
	methods: {
		changeActiveItem(el) {
			// ---
			console.log(works)
			console.log([...this.works])
			// const works = [...this.works];
			// ---
			// console.log(this.currentWork)

			// console.log(el.target)
			let active = this.$refs['thumbs__item-active'];
			// console.log(active)
			active.forEach(element => {
				element.classList.remove('thumbs__item-active');
			});
			el.target.classList.add('thumbs__item-active')
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
			console.log(this.works)
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
			currentWork: 0, //ЗАМЕНИЛИ
			currentIndex: 0,
		}
	},
	computed: {
		// это свойство внутри компонента определяется как обычное свойство в DATA
		// currentWork() {
		// 	return this.works[0]
		// 	//при изменении currentWork будет пересчитываться works
		// }
	},
	watch: {
		//шпионаж за currentIndex в DATA
		currentIndex(value) {
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
			const lastItem = this.works[this.works.length - 1];
			switch (direction) {
				case 'next':
					this.works.push(this.works[0]);
					this.works.shift();
					this.currentIndex++;
					break;
				case 'prev':
					this.works.unshift(lastItem);
					this.works.pop();
					this.currentIndex--;
					break;
			}
		},
		activeSlideClick(id) {
			console.log('В главном компоненте: ',id)
			let idUp = id - 1;
			this.currentIndex = idUp;
			this.currentWork = this.works[idUp];

			// console.log(el.target)
			// console.log('currentIndex ', this.currentIndex);
			// console.log('currentWork ', this.currentWork);
			// console.log('works ', this.works[idUp]);
			// ------------------
			// let active = this.$refs['thumbs__item-active'];
			// console.log(active)
			// active.forEach(element => {
			// 	element.classList.remove('thumbs__item-active');
			// });
			// el.target.classList.add('thumbs__item-active')
			// console.log(this.$refs)

		}
	},
	created() {
		const data = require('../data/works.json')
		this.works = this.requireImagesToArray(data);
		this.currentWork = this.works[this.currentIndex];//ЗАМЕНИЛИ
	}
})