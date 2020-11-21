export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		works: []
		//тут в ---> works <--- мы будем вписывать ---> work <---
	},
	mutation: {
		SET_WORKS: (state, works) => state.works = works,
		// ADD_WORK: (state, work) => state.works.unshift(work),

	},
	action: {
		// async add(store, work) {
		// 	try {
		// 		let response = store.$axios.post('/works', work)
		// 		store.commit(response)

		// 	} catch (error) {
		// 		console.dir(error)
		// 	}
		// },
		// async fetch(store) {//получение всех works по id
		fetch(store) {//получение всех works по id
			console.log('fetch')
			// try {
			// 	const user_id = localStorage.getItem('user_id');
			// 	let response = await this.$axios.get(`/works/${user_id}` )
			// 	console.log(response)
			// 	store.commit("SET_WORKS", response.data);// вызываем мутацию и отдаем туда данные вторым параметром

			// } catch (error) {
			// 	console.dir(error)
			// }
		},

	}
}
//РАБОТАЕТ С works.vue