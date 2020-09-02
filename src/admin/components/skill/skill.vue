<template>
	<!-- обычное отображение -->
	<div class="skill-component" v-if="currentSkill.editmode === false">
		<div class="title">{{skill.title}}</div>
		<div class="percent">{{skill.percent}} %</div>
		<div class="buttons">
			<icon grayscale symbol="pencil" class="btn" @click="currentSkill.editmode = true"/>
			<icon grayscale symbol="trash" class="btn" @click="$emit('remove', currentSkill)"/>
		</div>
	</div>
	<!-- отображение при изменение скила -->
	<div class="skill-component" v-else>
		<div class="title">
			<app-input
				@input="onClick1()"
				:errorMessage="errorMessageSkill"

				v-model="currentSkill.title"
				noSidePaddings
			/>
		</div>
		<div class="percent">
			<app-input
				@input="onClick2()"
				:errorMessage="errorMessagePercent"

				v-model="currentSkill.percent"
				type="number"
				min="0"
				max="100"
				maxlength="2"
			/>
		</div>
		<div class="buttons">
			<icon symbol="tick" class="btn" @click="$emit('approve', currentSkill )"/>
			<icon symbol="cross" class="btn" @click="currentSkill.editmode = false"/>
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
			// skill: currentSkill.title,
			validSkill: false,
			errorMessageSkill: '',

			// percent: currentSkill.percent,
			validPercent: false,
			errorMessagePercent: '',

			// editmode: false,
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
		onClick1() {
			let s = this.currentSkill.title.trim();
			if ( s === "") {
				this.validSkill = false;
				this.errorMessageSkill = 'Пустая строка';
			} else {
				this.validSkill = true;
				this.errorMessageSkill = '';
			}
		},
		onClick2() {
			let p = this.currentSkill.percent.trim();
			if (p === "" ||
				p > 100  ||
				p <  0
				) {
				this.validPercent = false;
				this.errorMessagePercent = 'Процент не определен или неверен';
			} else {
				this.validPercent = true;
				this.errorMessagePercent = '';
			}
		},
	}
}
</script>


<style lang="postcss" src="./skill.pcss" scoped>
</style>
