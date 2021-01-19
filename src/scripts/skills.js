import Vue from "vue";

import axios from 'axios';
import config from '../../env.paths.json'; //файлик со всеми веб путями в проекте
import store from '../admin/store'

axios.defaults.baseURL = config.BASE_URL;

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
	async created() {
		//если не нужен доступ до дом элементов
		// this.skills = require('../data/skills.json'); //json to array

		//получаем id пользователя из vuex
		const user_id = store.getters['user/userId'];
		const response = await axios.get(`/categories/${user_id}`);//загружаем данные с сервера вместо skills.json
		this.skills = response.data;
	},
	mounted() {
		//если нужен доступ до дом элементов

	},
})
