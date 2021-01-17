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
import { mapActions } from "vuex";

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
		...mapActions({
			showTooltip: "tooltips/show",
			login: "user/login"
		}),
		async handleSubmit() {
			if( await this.$validate() == false) return;
			this.isSubmitDisabled = true;

			try {
				// console.log('Валидация прошла успешно! Запрос отправлен!');
				const response = await $axios.post("/login", this.user);
				const token = response.data.token;
				localStorage.setItem('token', token); //устанавливает token для последующего его использования в ROUTE.JS
				$axios.defaults.headers["Authorization"] = `Bearer ${token}`; //обновляем токен в headers => axios

				//перед тем как перенаправлять пользоватея во внутрь занесем его в store
				const userResponse = await $axios.get("/user"); //получаем пользователя по текущиму token
				this.login(userResponse.data.user) //устанавливает user во vuex для последующего его использования в ROUTE.JS

				//сохранить данные пользователя
				const user = await $axios.get("/user");
				localStorage.setItem('user_id',  user.data.user.id);
				localStorage.setItem('user_name', user.data.user.name);

				//и если все хорошо делам рероутинг на страницу по умолчанию
				this.$router.replace('/about')

			} catch (error) {
				this.showTooltip({
					text: error.response.data.error,
					type: "error"
				})
			} finally {
				this.isSubmitDisabled = false;//разблокируем кнопку
			}
		}
	}
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>