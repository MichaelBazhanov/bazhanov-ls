<template>
	<div :class="['skill-add-line-component', {blocked: blocked}]">
		<defaultInput class="skill-text" placeholder="Новый навык"/>
		<defaultInput class="skill-percent" noSidePaddings v-model="percent" />
		<roundBtn class="skill-btn"/>
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
			percent: "%"
		}
	}
}
</script>


<style lang="postcss" src="./skillAddLine.pcss" scoped>
</style>
