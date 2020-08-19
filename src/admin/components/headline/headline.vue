<template>
	<div class="headline-component">
		<div class="container">
			<slot />
			<div class="title">{{title}}</div>
			<div class="btns">
				<button type="button" class="btn" @click="$emit('change', 'message')">Сообщения</button>
				<button type="button" class="btn" @click="$emit('change', 'logout')">Выйти</button>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped src="./headline.pcss"></style>

<script>
export default {
	props: {
		title: String,
	}
}
</script>

