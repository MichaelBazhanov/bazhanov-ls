<template>
	<div :class="['skill-add-line-component', {blocked: blocked}]">
		<defaultInput
			v-model="skill.title"
			:errorMessage="validation.firstError('skill.title')"

			class="skill-text"
			placeholder="Новый навык"

		/>
		<defaultInput
			v-model="skill.percent"
			:errorMessage="validation.firstError('skill.percent')"

			type="number"
			min="0"
			max="100"
			maxlength="2"
			slot="%"
			class="skill-percent"
			noSidePaddings
			percent
		/>
		<roundBtn
			class="skill-btn"
			@click="handleClick"
		/>
	</div>
</template>

<script>
import roundBtn from "../button/types/roundBtn";
import input from "../input";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
	mixins: [ValidatorMixin],
	validators: {
		"skill.title": value => {
			return Validator.value(value).required("Не может быть пустым")
		},
		"skill.percent": value => {
			return Validator.value(value)
				.integer("Должен быть числом")
				.between(0, 100, "Некорректное значение")
				.required("Не может быть пустым")
		}
	},
	props: {
		blocked: Boolean
	},
	components: {
		roundBtn,
		defaultInput:input,
	},
	data() {
		return {
			skill: {
				title: '',
				percent: 0,
			}
		}
	},
	methods: {
		async handleClick() {
			if( await this.$validate() == false) return
			this.$emit('approve', this.skill)
		}
	}
}
</script>


<style lang="postcss" src="./skillAddLine.pcss" scoped>
</style>
