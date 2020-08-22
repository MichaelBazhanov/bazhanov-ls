<template>
	<div class="tags-adder-component">
		<app-input
			title="добавление тега"
			v-model="currentTags"
		/>
		<ul class="tags">
			<li class="tag"
			v-for="(tag, index) in tagsArray"
			:key="`${tag}${index}`"
			v-if="tag.trim()"
			>
			<tag
				interactive
				:title="tag"
			/>
			</li>
		</ul>
	</div>
</template>

<script>
import appInput from "../input";
import tag from "../tag";

export default {
	data() {
		return {
			currentTags: "One, Two, Three"
		}
	},
	components: {
		appInput,
		tag,
	},
	computed: {
		tagsArray() {//превращаем строку в массив
			return this.currentTags.trim().split(', ');
		}
	}
}
</script>


<style lang="postcss" src="./tagsAdder.pcss" scoped>
</style>
