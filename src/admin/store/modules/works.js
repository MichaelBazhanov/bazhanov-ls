export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: [],
		//тут в ---> data <--- мы будем вписывать ---> work <---
		baseURL: ''
	},
	mutations: {
		BASE_URL: (state, url) => state.baseURL = url,
		SET_WORKS: (state, works) => state.data = works,
		ADD_WORK: (state, work) => state.data.unshift(work),
		// EDIT_WORK: (state, work) => {},

	},
	actions: {
		url(store) {
			store.commit('BASE_URL', this.$axios.defaults.baseURL)
		},
		async fetch(store) {//получение всех works по id
			// console.log(store)//ссылается на State
			// console.log(this)//ссылается на Store
			try {
				const user_id = localStorage.getItem('user_id');
				const response = await this.$axios.get(`/works/${user_id}`);
				store.commit("SET_WORKS", response.data);// вызываем мутацию и отдаем туда данные вторым параметром

				//далее устанавливаем базовый url для нормального отображения картинок
				store.dispatch('url');

			} catch (error) {
				console.error(error)
			}
		},
		async add(store, work) {
			const formData = new FormData();
			Object.keys(work).forEach(el => {
				// formData.append(`${el}`,`${work[el]}`)//почему это не работает (${work[el]} странный обьект)
				// console.log(`${el}`,`${work[el]}`)
				formData.append(el, work[el])
				// console.log(el, work[el])
			})

			// test
			// for(let [name, value] of formData) {
			// 	console.log(`${name}:${value}`);
			// }

			try {
				const response = await this.$axios.post('/works', formData)
				store.commit('ADD_WORK', response.data)

			} catch (error) {
				console.error(error)
			}
		},
	},
	getters: {
		baseURL(store) {
			return	store.baseURL
		}
	}
}
//РАБОТАЕТ С works.vue