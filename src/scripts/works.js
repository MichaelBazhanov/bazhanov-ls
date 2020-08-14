import Vue from "vue";

const thumbs = {
	props: ['currentWork','works'],
	template: '#preview-thumbs',
}
const btns = {
	template: '#preview-btns',
}
const display = {
	props: ['currentWork','works'],
	template: '#preview-display',
	components: {thumbs, btns},
}
const tag = {
	template: '#preview-tags',
}
const info = {
	props: ['currentWork'],
	template: '#preview-info',
	components: {tag}
}

new Vue({
	el: '#works-component',
	template: '#preview-container',
	components: {display, info},
	data() {
		return {
			works: [],
			currentWork: {},
			currentIndex: 0,
		}
	},
	methods: {
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
				case 'next':
					console.log('next')
					break;
				case 'prev':
					console.log('prev');
					break;
			}
		}
	},
	created() {
		const data = require('../data/works.json')
		this.works = this.requireImagesToArray(data);
		this.currentWork = this.works[this.currentIndex];
	}
})