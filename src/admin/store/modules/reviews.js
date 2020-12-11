export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: [],
	},
	// reviews review
	mutations: {
		SET_REVIEWS: (state, reviews) => state.data = reviews,
		ADD_REVIEW: (state, review) => state.data.unshift(review),
		EDIT_REVIEW: (state, review) => {
			state.data = state.data.map(item => {
				return item.id == review.id ? review : item
			})
		},
		REMOVE_REVIEW: (state, review) => {
			state.data = state.data.filter(item => item.id != review.id )
		},
	},
	actions: {

		async fetch(store) {//получение всех works по id
			// console.log(store)//ссылается на State
			// console.log(this)//ссылается на Store
			try {
				const user_id = localStorage.getItem('user_id');
				const response = await this.$axios.get(`/reviews/${user_id}`);

				//данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				response.data.forEach(obj => {
					obj.photo = this.$axios.defaults.baseURL+'/'+obj.photo
				})

				store.commit("SET_REVIEWS", response.data.reverse());// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				console.error(error)
			}
		},
		async add(store, review) {
			const formData = new FormData();
			Object.keys(review).forEach(el => {
				// formData.append(`${el}`,`${work[el]}`)//почему это не работает (${work[el]} странный обьект)
				// console.log(`${el}`,`${work[el]}`)
				formData.append(el, review[el])
			})

			try {
				const response = await this.$axios.post('/reviews', formData)

				//данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				response.data.photo =  this.$axios.defaults.baseURL+'/'+response.data.photo

				store.commit('ADD_REVIEW', response.data)

			} catch (error) {
				console.error(error)
			}
		},
		async edit(store, review){
			const formData = new FormData();
			Object.keys(review).forEach(el => {
				// formData.append(`${el}`,`${work[el]}`)//почему это не работает (${work[el]} странный обьект)
				// console.log(`${el}`,`${work[el]}`)
				formData.append(el, review[el])
			})

			try {
				let {data} = await this.$axios.post(`/reviews/${review.id}`, formData); //не передаём внутрь параметры и никакой ответ не получаем

				// //данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				review.photo = this.$axios.defaults.baseURL+'/'+data.review.photo;

				store.commit("EDIT_REVIEW", review);// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async remove(store, review) {
			try {
				const {data} = await this.$axios.delete(`/reviews/${review.id}`) //не передаём внутрь параметры и никакой ответ не получаем
				store.commit('REMOVE_REVIEW', review)
			} catch {
				throw new Error(error)
			}
		}
	},
}
//РАБОТАЕТ С works.vue