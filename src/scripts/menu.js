import Vue from "vue";
new Vue({
	el: '#menu-component',
	template: `#menu-container`,
	data() {
		return {

		}
	},
	computed: {
		burger() {
			let burger = document.querySelector('.burger-menu');
			burger.addEventListener('click', (e) => {
				e.target.closest('.burger-menu').classList.toggle('active-burger');

				let nav = this.$refs['navigation'];
				nav.classList.toggle('active-nav');
			});

		}
	},
	created() {
		// console.log('created')
	},
	mounted() {
		this.burger
	}
})