<template>
	<!-- обычное отображение -->
	<div class="skill-component" v-if="currentSkill.editmode === false" ref="skill-closed">
		<div class="title">{{skill.title}}</div>
		<div class="percent">{{skill.percent}} %</div>
		<div class="buttons">
			<icon grayscale symbol="pencil" class="btn" @click="currentSkill.editmode = true"/>
			<icon grayscale symbol="trash" class="btn" @click="$emit('remove', currentSkill)"/>
		</div>
	</div>
	<!-- отображение при изменение скила -->
	<div class="skill-component" v-else ref="skill-open">
		<div class="title">
			<app-input
				:errorMessage="validation.firstError('currentSkill.title')"
				v-model="currentSkill.title"
				noSidePaddings
			/>
		</div>
		<div class="percent">
			<app-input
				:errorMessage="validation.firstError('currentSkill.percent')"
				v-model="currentSkill.percent"
				type="number"
				min="0"
				max="100"
				maxlength="2"
			/>
		</div>
		<div class="buttons">
			<icon symbol="tick" class="btn" @click="handleInput"/>
			<icon symbol="cross" class="btn" @click="currentSkill.editmode = false"/>
		</div>
	</div>
</template>

<script>
import icon from "../icon";
import input from "../input";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
	mixins: [ValidatorMixin],
	validators: {
		"currentSkill.title": value => {
			return Validator.value(value).required("Не может быть пустым")
		},
		"currentSkill.percent": value => {
			return Validator.value(value)
				.integer("Должен быть числом")
				.between(0, 100, "Некорректное значение")
				.required("Не может быть пустым")
		}
	},
	props: {
		skill: {
			type: Object,
			default: () => {},
			required: true
		}
	},
	data() {
		return {
			currentSkill: {
				id:  this.skill.id,
				title: this.skill.title,
				percent:  this.skill.percent,
				category:  this.skill.category,
				editmode: false,
			},
		}
	},
	components: {
		icon,
		appInput: input,

	},
	methods: {
		async handleInput() {
			if( await this.$validate() == false) return
			this.$emit('approve', this.currentSkill)
		}
	}
}
</script>


<style lang="postcss" src="./skill.pcss" scoped>
</style>
