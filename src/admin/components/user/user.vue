<template>
	<div class="user-components">
		<avatar size="2.7" :src="userPic" />
		<div class="username">Бажанов Михаил</div>
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

<style lang="postcss">
.user-components {
	display: flex;
	align-items: center;
}
.username {
	margin-left: 18px;
	font-weight: 600;
	font-size: 18px;
	color: $text-color;
}
</style>>
