<template>
	<div class="headline-component">
		<div class="container container-headline">
			<slot />
			<div class="title">{{title}}</div>
			<div class="btns">
				<button type="button" class="btn" @click="$emit('logout', 'logout')">Выйти</button>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped src="./headline.pcss"></style>

<script>
export default {
	props: {
		title: String,
		default: 'Панель администрирования'
	}
}
</script>

