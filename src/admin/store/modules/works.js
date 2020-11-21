export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: []
		//тут в ---> works <--- мы будем вписывать ---> work <---
	},
	mutations: {
		SET_WORKS: (state, works) => state.data = works,
		ADD_WORK: (state, work) => state.data.unshift(work),

	},
	actions: {
		async fetch(store) {//получение всех works по id
			try {
				const user_id = localStorage.getItem('user_id');
				let response = await this.$axios.get(`/works/${user_id}`);
				console.log(response.data);
				store.commit("SET_WORKS", response.data);// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				console.error(error)
			}
		},
		async add(store, work) { console.log('---------------------add', work)
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
				let response = await this.$axios.post('/works', formData)
				// console.log('response ', response)
				store.commit('ADD_WORK', response.data)

			} catch (error) {
				console.error(error)
			}
		},


	}
}
//РАБОТАЕТ С works.vue