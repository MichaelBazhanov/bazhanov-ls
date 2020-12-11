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
	{id: '0', title: 'Обо мне', alias: 'about', active: true, },
	{id: '1', title: 'Навыки', alias: 'values', active: false,},
	{id: '2', title: 'Работы', alias: 'works', active: false,},
	{id: '3', title: 'Отзывы', alias: 'reviews', active: false,},
];
export default {
	data() {
		return {
			links,
			currentActive: "about",
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