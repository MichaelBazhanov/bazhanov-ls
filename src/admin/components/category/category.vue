<template>
	<div class="category-component">
		<card slim>
			<edit-line slot="title" v-model="title" editModeByDefault/>
			<ul class="skills" slot="content">
				<li class="item" v-for="skill in skills" :key="skill.id">
					<skill :skill="skill"/>
				</li>
			</ul>
		</card>
	</div>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";

const skills = [
	{ id:0, title:"HTMl", percent:80 },
	{ id:1, title:"CSS", percent:30 },
	{ id:2, title:"JavaScript", percent:50 },
]

export default {
	components: {
		card,
		editLine,
		skill,
	},
	data() {
		return {
			title: "",
			skills,
		}
	},
}
</script>

<style lang="postcss" src="./category.pcss"></style>
