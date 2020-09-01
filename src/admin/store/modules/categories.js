export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: []
	},
	mutations: {
		SET_CATEGORIES: (state, categories) => (state.data = categories ),
		ADD_CATEGORIES: (state, category) => (state.data.unshift(category) )
	},
	actions: {
		async create(store, title) {//создание категории
			try {
				const response = await this.$axios.post('/categories', {'title':title})
				console.log('___________', response)
				store.commit("ADD_CATEGORIES", response.data);// вызываем мутацию и отдаем туда данные вторым параметром
				console.log(response)
			} catch (error) {
				throw new Error(error)
			}
		},
		async fetch(store) {//получение всех категорий по id
			try {
				const response = await this.$axios.get('/categories/376' )
				console.log(response)
				store.commit("SET_CATEGORIES", response.data);// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				console.dir(error)
			}
		}
	}
}
//РАБОТАЕТ С about.vue