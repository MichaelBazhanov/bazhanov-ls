<template>
	<div class="category-component">
		<card slim>
			<edit-line
				slot="title"
				v-model="categoryTitle"
				:editModeByDefault="emptyCategory"
				@remove="$emit('remove', $event)"
				@approve="$emit('approve', emptyCategory = false)"
				@blocked="emptyCategory = true"
			/>
				<!-- @approve="test()" -->
			<template slot="content">
				<ul class="skills" v-if="emptyCategory == false">
					<li class="item" v-for="skill in skills" :key="skill.id">
						<skill
							:skill="skill"
							@remove="$emit('remove-skill', $event)"
							@approve="$emit('edit-skill', $event)"
						/>
					</li>
				</ul>
				<div class="bottom-line">
					<skill-add-line :blocked="emptyCategory"/>
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
			emptyCategory: this.empty,
		}
	},
	methods: {
		test() {
			console.log(this.empty)
			console.log(this.emptyCategory)
		}
	}
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
}
</script>

<style lang="postcss" src="./category.pcss" scoped></style>
