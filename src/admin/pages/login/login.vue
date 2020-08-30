<template>
	<div class="login-page-component">
		<div class="content">
			<div class="form">
				<div class="form-title">Авторизация</div>
				<div class="row">
					<app-input title="Логин" icon="user" />
				</div>
				<div class="row">
					<app-input title="Пароль" icon="key" type="password" />
				</div>
				<div class="btn">
					<appButton class="btn-send" title="Отправить" @click="onClick" />
				</div>
				<appIcon symbol="cross"  grayscale  class="btn-close"/>
			</div>
		</div>
	</div>
</template>

<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import appIcon from "../../components/icon";

export default {
	components: {
		appInput,
		appButton,
		appIcon,
	},
	methods: {
		onClick() {
			console.log('click')
		}
	}
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>