<template>
	<div :class="['skill-add-line-component', {blocked: blocked}]">
		<defaultInput
			@input="onClick1()"
			:errorMessage="errorMessageSkill"
			v-model="skill"

			class="skill-text"
			placeholder="Новый навык"

		/>
		<defaultInput
			@input="onClick2()"
			:errorMessage="errorMessagePercent"
			v-model="percent"
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
			@click="allClick()"
		/>
	</div>
</template>

<script>
import roundBtn from "../button/types/roundBtn";
import input from "../input";

export default {
	props: {
		blocked: Boolean
	},
	components: {
		roundBtn,
		defaultInput:input,
	},
	data() {
		return {
			skill: '',
			validSkill: false,
			errorMessageSkill: '',

			percent: '',
			validPercent: false,
			errorMessagePercent: '',
		}
	},
	methods: {
		onClick1() {
			if (this.skill === "") {
				this.validSkill = false;
				this.errorMessageSkill = 'Пустая строка';
			} else {
				this.validSkill = true;
				this.errorMessageSkill = '';
			}
		},
		onClick2() {
			if (this.percent === "" ||
				this.percent > 100  ||
				this.percent < 0
				) {
				this.validPercent = false;
				this.errorMessagePercent = 'Процент не определен или неверен';
			} else {
				this.validPercent = true;
				this.errorMessagePercent = '';
			}
		},
		allClick() {
			this.onClick1()
			this.onClick2()

			if ((this.skill != "") && (this.percent != "")) {
				this.$emit('approve', {
					title: this.skill,
					percent: this.percent,
				});
				this.skill = '';
				this.percent = '';
			}
		}
	}
}
</script>


<style lang="postcss" src="./skillAddLine.pcss" scoped>
</style>
