<template>
	<div class="works-page-component">

		<div class="page-content">

			<!-- <div class="container" v-if="categories.length"> -->
			<div class="container">
				<div class="header">
					<div class="title">Блок "Работы"</div>
				</div>

			</div>
			<!-- <div class="container" v-else>
				loading ...
			</div> -->
			<div class="container" v-if="!categories.length && emptyCatIsShow === false">
				Нет данных
			</div>
		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)

export default {
	//локальная регисрация компонента
	components: {
	},
	data() {
		return {
			categories: [],
			emptyCatIsShow: false,
		};
	},

};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>