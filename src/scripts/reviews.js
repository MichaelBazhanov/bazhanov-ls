import Vue from "vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

import axios from 'axios';
import config from '../../env.paths.json'; //файлик со всеми веб путями в проекте
import store from '../admin/store'

axios.defaults.baseURL = config.BASE_URL;

new Vue({
	el: '#slider-component',
	template: '#slider-container',
	components: {
		Swiper, SwiperSlide
	},
	data() {
		return {
			reviews: [],
			sliderOptions: {
				slidesPerView: 1,
				spaceBetween: 0,
				// height: '200px',
				autoHeight: true,
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 60
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 60
					},
					1200: {
						slidesPerView: 2,
						spaceBetween: 60
					},
					1800: {
						slidesPerView: 2,
						spaceBetween: 60
					},
				}
			},
		}
	},
	methods: {
		slide(direction) {
			const slider = this.$refs["slider__content"].$swiper;

			switch (direction) {
				case 'next':
					slider.slideNext();
					break;
				case 'prev':
					slider.slidePrev();
					break;
			}
		},
		requireImagesToArray(data) {
			return data.map((item)=> {
				const requireImage = require(`../images/content/${item.pic}`).default;
				item.pic = requireImage;
				return item
			})
		},
	},
	async created() {
		// const data = require('../data/reviews.json') //старое
		// this.reviews = this.requireImagesToArray(data); //старое

		//получаем id пользователя из vuex
		const user_id = store.getters['user/userId'];
		const response = await axios.get(`/reviews/${user_id}`);//загружаем данные с сервера вместо works.json

		//переписываем пути картинок obj.photo
		response.data.forEach(obj => {
			obj.photo = config.BASE_URL+'/'+obj.photo
		})

		this.reviews = response.data;
	},
	mounted() {
		//Получаем все рефы этого компонента
		let ref = this.$refs;

		//Получаем сам слайдер
		const slider = this.$refs["slider__content"].$swiper;

		//Добавляем начальный класс на кнопку
		ref.prevBtn.classList.add('round-btn--disabled');

		//Обработка события смены
		slider.on('slideChange', function () {
			if (slider.isEnd) {
				ref.nextBtn.classList.add('round-btn--disabled');
			} else {
				ref.nextBtn.classList.remove('round-btn--disabled');
			}
			if (slider.isBeginning) {
				ref.prevBtn.classList.add('round-btn--disabled');
			} else {
				ref.prevBtn.classList.remove('round-btn--disabled');
			}
		});
	}
})