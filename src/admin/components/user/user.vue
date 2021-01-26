<template>
	<div class="user-components">
		<avatar size="2.7" :src="userPic" />
		<div class="content">
			<div class="username">Бажанов Михаил</div>
			<div class="btns">
				<button type="button" class="btn" @click="$emit('logout', 'logout')">Выйти</button>
			</div>
		</div>
	</div>
</template>

<script>
import avatar from "../avatar";
export default {
	components: {
		avatar
	},
	computed: {
		userPic() {
			return require("../../../images/content/user.jpg").default
		}
	}
}
</script>

<style lang="postcss" scoped src='./user.pcss'>

</style>>
