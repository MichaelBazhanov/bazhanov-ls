<template>
	<div class="link-component">
		<a class="link" :href="linkTo()" target="linkAs()">linkTo()</a>
	</div>
</template>

<script>
export default {
	props: {
		link: String,
		blank: String,
	},
	data() {
		return {
			linkTo() {
				return link
			},
			linkAs() {
				return blank
			}
		}
	}

}
</script>


<style lang="postcss" src="./link.pcss" scoped>
</style>
