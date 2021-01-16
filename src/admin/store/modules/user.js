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
		userIsLoggedIn: state => {}
	},
	actions: {
		login({commit}, user) {
			commit('SET_USER', user)
		},
		logout({commit}) {

		}
	},
}