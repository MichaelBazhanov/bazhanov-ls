<template>
	<div class="avatar-component">
		<div
		:class="['image', {'bordered' : active}]"
		>
			<img
				v-bind="$attrs"
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
