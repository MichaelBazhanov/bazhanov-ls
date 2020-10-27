<template>
	<div class="navigation-component">
		<div class="container">
			<ul class="list">
				<li
				v-for="link in links"
				:class="['item', {active: currentActive == link.alias}]"
				:key="link.id"
				@click="activeOn(link.alias)">
					<!-- <a :href="`/${link.alias}`" :class="['link']">{{link.title}}</a> -->
					<router-link
						tag="a"
						:to="`/${link.alias}`"
						:class="['link']"
					>
						{{ link.title }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
//создаем обьект данных для навигации
const links = [
	{id: '0', title: 'Обо мне', alias: 'about', active: false, },
	{id: '1', title: 'Навыки', alias: 'values', active: true,},
	{id: '2', title: 'Работы', alias: 'works', active: false,},
	{id: '3', title: 'Отзывы', alias: 'reviews', active: false,},
];
export default {
	data() {
		return {
			links,
			currentActive: "values",
		}
	},
	methods: {
		activeOn(link) {
			this.currentActive = link;
		}
	}
};
</script>

<style lang="postcss" scoped src="./navigation.pcss"></style>