<template>
	<div class="works-page-component">

		<div class="page-content">

			<!-- <div class="container" v-if="categories.length"> -->
			<div class="container">
				<div class="header">
					<div class="title">Блок "Работы"</div>
				</div>
				<div class="work-waiting">
					<card
						title="Редактирование работы"
					>
						<div slot="content" class="work">
							<div class="work-item">
								<div class="work-img">1</div>
							</div>
							<div class="work-item">
								<div class="work-text">2</div>
							</div>
						</div>
					</card>
				</div>
				<div class="works">000</div>

			</div>
			<!-- <div class="container" v-else>
				loading ...
			</div> -->
			<!-- <div class="container" v-if="!categories.length && emptyCatIsShow === false">
				Нет данных
			</div> -->
		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import card from "../../components/Card";

export default {
	//локальная регисрация компонента
	components: {
		card,
	},
	data() {
		return {
		};
	},

};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>