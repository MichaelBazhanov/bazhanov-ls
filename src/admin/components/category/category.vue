<template>
	<div class="category-component">
		<card slim>
			<edit-line slot="title" v-model="title" :editModeByDefault="empty"/>
			<template slot="content">
				<ul class="skills" v-if="empty == false">
					<li class="item" v-for="skill in skills" :key="skill.id">
						<skill :skill="skill"/>
					</li>
				</ul>
				<div class="bottom-line">
					<skill-add-line :blocked="empty"/>
				</div>
			</template>
		</card>
	</div>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

const skills = [
	{ id:0, title:"HTMl", percent:80 },
	{ id:1, title:"CSS", percent:30 },
	{ id:2, title:"JavaScript", percent:50 },
]

export default {
	props: {
		empty: Boolean
	},
	components: {
		card,
		editLine,
		skill,
		skillAddLine,
	},
	data() {
		return {
			title: "Название новой группы",
			skills,
		}
	},
}
</script>

<style lang="postcss" src="./category.pcss" scoped></style>
