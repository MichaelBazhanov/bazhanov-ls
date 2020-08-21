<template>
	<div class="category-component">
		<card slim>
			<edit-line
				slot="title"
				v-model="categoryTitle"
				:editModeByDefault="empty"
				@remove="$emit('remove', $event)"
			/>
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

export default {
	props: {
		empty: Boolean,
		title: {
			type: String,
			default: ''
		},
		skills: {
			type: Array,
			dafault: ()=>[]
		}
	},
	components: {
		card,
		editLine,
		skill,
		skillAddLine,
	},
	data() {
		return {
			categoryTitle: this.title,
		}
	},
}
</script>

<style lang="postcss" src="./category.pcss" scoped></style>
