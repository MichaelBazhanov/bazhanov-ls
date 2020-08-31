<template>
	<div class="header-component">

		<headline title="Панель администрирования">
			<user></user>
		</headline>

		<navigation/>
	</div>
</template>

<script>
import user from "../../components/user/user"; //импорт компонента
import headline from "../../components/headline/headline"; //импорт компонента
import navigation from "../../components/navigation/navigation"; //импорт компонента

export default {
	components: {
		headline,
		user,
		navigation,
	},
}
</script>

<style lang="postcss" scoped src="./header.pcss">
</style>>
