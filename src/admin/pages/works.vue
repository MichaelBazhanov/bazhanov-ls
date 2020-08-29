<template>
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
				<category @remove="emptyCatIsShow = false" empty />
			</li>
			<li class="item" v-for="category in categories" :key="category.id">
				<category :title="category.category" :skills="category.skills"></category>
			</li>
		</ul>
	</div>
</template>

<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import button from "../components/button"; //импорт компонента
import category from "../components/category"; //импорт компонента


export default {
  //локальная регисрация компонента
	components: {
		iconedButton: button,
		category,
	},
	data() {
		return {
			categories: [],
			emptyCatIsShow: false,
		};
	},
	created() {
		this.categories = require("../data/categories.json");
	},
	methods: {

	},
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.header {
	display: flex;
	margin-bottom: 40px;
	@include desktopHd {
	}
	@include desktop {
	}
	@include tablets {
		flex-direction: column;
	}
	@include phones {
	}
}
.title {
	margin-right: 60px;
	font-size: 21px;
	font-weight: bold;
	color: $text-color-5;

	@include desktopHd {
	}
	@include desktop {
	}
	@include tablets {
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 25px;
	}
	@include phones {
	}
}

.skills {
	display: flex;
	flex-wrap: wrap;
}
.item {
	width: calc(100% / 4 - 30px);
	margin-right: 30px;
	margin-bottom: 30px;

	@include desktopHd {
		width: calc(100% / 3 - 30px);
	}
	@include desktop {
		width: calc(100% / 2 - 30px);
	}
	@include tablets {
		margin-right: 0px;
		width: calc(100% / 1 - 0px);
	}
	@include phones {
	}
}
</style>
