<template>
	<div class="avatar-component">
		<div
		:class="['image', {'bordered' : active}]"
		>
			<img
				v-bind="$attrs"
				@click="$emit('change', 'был произведен клик по img !!!')"
			>
		</div>
		<div class="username">
			{{title}}
		</div>
	</div>
</template>

<style lang="postcss" scoped src="./test.pcss"></style>

<script>
export default {
	props: {
		title: String,
		active: Boolean,
	}
}
</script>
