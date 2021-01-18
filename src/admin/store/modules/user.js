export default {
	namespaced: true,
	state: {
		user: {}
	},
	mutations: {
		SET_USER: (state, user) => state.user = user,
		CLEAR_USER: state => state.user = {},
	},
	getters: {
		userIsLoggedIn: state => {
			const userObj = state.user; //сохраняем user из state
			const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;
			//удостоверимся что у этого объекта нет никаких полей И функция которая создала этот объект была базовая функция конструктора Object

			return userObjIsEmpty === false //проверка если объект не пустой то user залогинен
		},
		userId: (state, getters) => {
			return getters.userIsLoggedIn ? state.user.id : '376'
		}
	},
	actions: {
		login({commit}, user) {
			commit('SET_USER', user)
		},
		logout({commit}) {
			localStorage.removeItem('token'); //что бы выйти удаляем токен
			location.reload(); //перезагружаем страничку для того что бы выкинуло на /login
		}
	},
}