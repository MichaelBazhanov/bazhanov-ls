<template>
	<!-- обычное отображение -->
	<div class="skill-component" v-if="editmode === false">
		<div class="title">{{skill.title}}</div>
		<div class="percent">{{skill.percent}} %</div>
		<div class="buttons">
			<icon grayscale symbol="pencil" class="btn" @click="editmode = true"/>
			<icon grayscale symbol="trash" class="btn" @click="$emit('remove', skill.id)"/>
		</div>
	</div>
	<!-- отображение при изменение скила -->
	<div class="skill-component" v-else>
		<div class="title">
			<app-input
				v-model="currentSkill.title"
				noSidePaddings
			/>
		</div>
		<div class="percent">
			<app-input
				v-model="currentSkill.percent"
				type="number"
				min="0"
				max="100"
				maxlength="2"
			/>
		</div>
		<div class="buttons">
			<icon symbol="tick" class="btn" @click="$emit('approve', currentSkill )"/>
			<icon symbol="cross" class="btn" @click="editmode = false"/>
		</div>
	</div>
</template>

<script>
import icon from "../icon";
import input from "../input";

export default {
	props: {
		skill: {
			type: Object,
			default: () => {},
			required: true
		}
	},
	data() {
		return {
			editmode: false,
			currentSkill: {
				id:  this.skill.id,
				title: this.skill.title,
				percent:  this.skill.percent,
			}
		}
	},
	components: {
		icon,
		appInput: input,

	}
}
</script>


<style lang="postcss" src="./skill.pcss" scoped>
</style>
