<template>
	<div>
		<h1>works</h1>
	</div>
</template>

<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
// import button from "../components/button"; //импорт компонента
// import category from "../components/category"; //импорт компонента


export default {
  //локальная регисрация компонента
	components: {
		// iconedButton: button,
		// category,
	},
	data() {
		// return {
		// 	categories: [],
		// 	emptyCatIsShow: false,
		// };
	},
	created() {
		// this.categories = require("../data/categories.json");
	},
	methods: {

	},
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";



</style>
