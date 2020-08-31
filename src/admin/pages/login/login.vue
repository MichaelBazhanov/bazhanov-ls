<template>
	<div class="login-page-component">
		<div class="content">
			<form class="form" @submit.prevent="handleSubmit">
				<div class="form-title">Авторизация</div>
				<div class="row">
					<app-input
						title="Логин"
						icon="user"
						:errorMessage="validation.firstError('user.name')"
						v-model="user.name"
					/>
				</div>
				<div class="row">
					<app-input
						title="Пароль"
						icon="key"
						type="password"
						:errorMessage="validation.firstError('user.password')"
						v-model="user.password"
					/>
				</div>
				<div class="btn">
					<appButton class="btn-send" title="Отправить" :disabled="isSubmitDisabled" />
				</div>
				<appIcon symbol="cross"  grayscale  class="btn-close"/>
			</form>
		</div>
	</div>
</template>

<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import appIcon from "../../components/icon";
import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';
import $axios from "../../request";

export default {
	mixins: [ValidatorMixin],
	validators: {
		"user.name": value => {
			return Validator.value(value).required('Введите имя пользователя')
		},
		"user.password": value => {
			return Validator.value(value).required('Введите пароль')
		}
	},
	data() {
		return {
			user: {
				name: '',
				password: '',
			},
			isSubmitDisabled: false,
		}
	},
	components: {
		appInput,
		appButton,
		appIcon,
	},
	methods: {
		async handleSubmit() {
			if( await this.$validate() == false) return;
			this.isSubmitDisabled = true;

			try {
				console.log('Валидация прошла успешно! Запрос отправлен!');
				const response = await $axios.post("/login", this.user);

				const token = response.data.token;
				localStorage.setItem('token', token);
				$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
				this.$router.replace('/')
			} catch (error) {
				console.dir(error.response.data.error)
			} finally {
				this.isSubmitDisabled = false;//разблокируем кнопку
			}
		}
	}
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>