<template>
	<div class="about-page-component">

		<div class="page-content">

			<div class="container">

				<div class="header">
					<div class="title">Блок "Обо мне"</div>
					<iconed-button
						type="iconed"
						title="Добавить группу"
						v-if="emptyCatIsShow == false"
						@click="emptyCatIsShow = true"
						class="header-round-btn"
					/>
				</div>

				<ul class="skills">
					<li class="item" v-if="emptyCatIsShow">
						<category
							@remove="emptyCatIsShow = false"
							empty
						/>
					</li>
					<li class="item" v-for="category in categories" :key="category.id">
						<category :title="category.category" :skills="category.skills"></category>
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import button from "../../components/button"; //импорт компонента
import category from "../../components/category"; //импорт компонента

export default {
	//локальная регисрация компонента
	components: {
		iconedButton: button,
		category,
		// headerPage: header,
	},
	data() {
		return {
			categories: [],
			emptyCatIsShow: false,
		};
	},
	created() {
		this.categories = require("../../data/categories.json");
	},
	methods: {

	},
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>