import Vue from "vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

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
				slidesPerView: 2
			}
		}
	},
	methods: {
		slide(direction) {
			console.log(direction)
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
	created() {
		const data = require('../data/reviews.json')
		this.reviews = this.requireImagesToArray(data);
	}
})