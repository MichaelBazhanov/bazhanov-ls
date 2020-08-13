import Vue from "vue";

const skillsItem = {
	props: ['skill'],
	template: '#skills-item',
	methods: {
		drawPersentageCircle() {
			//если нужен доступ до дом элементов
			const circle = this.$refs['colored-circle'];
			// circle - это svg круг
			// stroke-dasharray - это css свойство
			const dashArray = parseInt(
				getComputedStyle(circle).getPropertyValue('stroke-dasharray')
			);
			const percent = (dashArray / 100) * (100 - this.skill.percent);
			//              (получили 1 %)      (из 100% вычитаем столько сколько пришло и на разницу закрашиваем)
			circle.style.strokeDashoffset = percent;
		}
	},
	mounted() {
		//всю логику стараемся перекинуть в методы
		this.drawPersentageCircle();
	},
}

const skillsRow = {
	props: ['category'],
	template: '#skills-row',
	components: {
		skillsItem: skillsItem,
	}
}

new Vue({
	el: '#skills-component',
	template: '#skills-list',
	components: {
		skillsRow: skillsRow,
	},
	data() {
		return {
			skills: [],
		}
	},
	created() {
		//если не нужен доступ до дом элементов
		this.skills = require('../data/skills.json'); //json to array
	},
	mounted() {
		//если нужен доступ до дом элементов

	},
})
// /---------------------
// new Vue({
// 	el: '#skills-component',
// 	template: '#skills-list',
// 	components: {
// 		skillsRow: {
// 			template: '#skills-row',
// 			components: {
// 				skillsItem: {
// 					template: '#skills-item',
// 					data() {
// 						return {
// 							title: 'Заголовок'
// 						}
// 					},
// 					mounted() {
// 						this.title = this.title + '1234567890'
// 					}
// 				},
// 			}
// 		},
// 	}
// })