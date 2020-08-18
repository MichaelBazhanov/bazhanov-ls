import Vue from "vue";

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
			// return works.slice(0, 4)
			return works
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
			thumbLink: [],
			numberNext: 120,
		}
	},
	computed: {
		// это свойство внутри компонента определяется как обычное свойство в DATA
		currentWork() {
			return this.works[this.currentIndex]
			//при изменении currentWork будет пересчитываться works
		},
		quantityWorks() {//количество элементов в WORKS
			return this.works.length - 1;
		}
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
			console.log(direction)
			this.currentIndex = direction;
			if (this.currentIndex == this.quantityWorks) {

			}
		},
		next() {
			console.log(this.numberNext)
			let thumbs = this.thumbLink;
			let thumbsChild = this.thumbLink.childNodes;
			// console.log(thumbs)
			// console.log(thumbsChild)
			// let thumbWidth = this.thumbLink.firstElementChild.getBoundingClientRect().width;
			this.currentIndex++;
			console.log('this.currentIndex ', this.currentIndex)
			console.log('this.quantityWorks', this.quantityWorks)

			//ГЛАВНОЕ УСЛОВИЕ
			if (this.currentIndex == this.quantityWorks) { // 4==4
				console.log('Я последний next')
				// this.numberNext = this.numberNext - 120;
				// if (this.numberNext == -480) {
				// 	console.log('___ -480 to 0 ___')
				// 	this.numberNext = 0;
				// }
				thumbs.style.transform = `translate3d(0px,0px,0px)`;

			} else if (this.currentIndex > this.quantityWorks){ // 5 > 4
				console.log('NEXT => this.currentIndex > this.quantityWorks');

				setTimeout(()=>{ console.log(thumbsChild[0])
					let first = this.thumbLink.firstElementChild;
					// this.thumbLink.firstElementChild.remove();
					this.thumbLink.appendChild(first);
				}, 1000)

				// setTimeout(()=>{ console.log('склонировали')
				// 	let first = this.thumbLink.firstElementChild;
				// 	let clone = first.cloneNode(true);
				// 	this.thumbLink.appendChild(clone);
				// }, 1000)
				// setTimeout(()=>{ console.log('translate3d')
				// 	thumbs.style.transform = `translate3d(0px,0px,0px)`;
				// }, 2000)
				// setTimeout(()=>{ console.log('удаляем первый')
				// 	let first = this.thumbLink.firstElementChild;
				// 	this.thumbLink.firstElementChild.remove();
				// 	// this.thumbLink.appendChild(first);
				// }, 3000)

				// setTimeout(()=>{
				// 	thumbs.style.transform = `translate3d(-120px,0px,0px)`;
				// }, 3000)

				// // 	//-------------------------------------------------
				// // 	thumbsChild.forEach(element => {
				// // 		element.classList.remove('thumbs__item-active');
				// // 	});
				// thumbs.style.transform = `translate3d(0px,0px,0px)`;

			} else if (this.currentIndex < this.quantityWorks){ // 1.2.3 < 4
				// console.log('Я последний next +++++++')
			}
		},
		prev() {
			this.currentIndex--;
			if (this.currentIndex < 0) {
				console.log('Я последний prev')
			}
		},
		thumbs(el) {
			this.thumbLink = el;
			console.log(this.thumbLink)
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
	},
	// mounted() {
	// 	//определяем ширину itemThumbs
	// 	let widthThumbs = this.$refs['thumbs__item-active'];
	// 	console.log(widthThumbs)
	// }
})