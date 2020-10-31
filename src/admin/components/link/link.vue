<template>
	<div class="link-component">
		<a class="link" v-bind="$attrs">
			<slot />
		</a>
		<!-- <a class="link" :href="linkTo()" target="linkAs()">123</a> -->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	// props: {
	// 	link: String,
	// 	blank: String,
	// },
	// data() {
	// 	return {
	// 		linkTo() {
	// 			return link
	// 		},
	// 		linkAs() {
	// 			return blank
	// 		}
	// 	}
	// },
	// created() {
	// 	console.log('link ', this.link)
	// 	console.log('blank ', this.blank)
	// }
}
</script>


<style lang="postcss" src="./link.pcss" scoped>
</style>
