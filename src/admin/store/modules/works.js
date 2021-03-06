export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: [],
		//тут в ---> data <--- мы будем вписывать ---> work <---
	},
	mutations: {
		SET_WORKS: (state, works) => state.data = works,
		ADD_WORK: (state, work) => state.data.unshift(work),
		EDIT_WORK: (state, work) => {
			state.data = state.data.map(item => {
				return item.id == work.id ? work : item
			})
		},
		REMOVE_WORK: (state, work) => {
			state.data = state.data.filter(item => item.id != work.id )
		},
		// IMAGE_PATH: (state) => {//переписываем некорректные тупи картинок с сервера
		// 	//данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
		// 	state.data.forEach(e => e.photo = `https://webdev-api.loftschool.com/${e.photo}` )
		// }

	},
	actions: {

		async fetch(store) {//получение всех works по id
			// console.log(store)//ссылается на State
			// console.log(this)//ссылается на Store
			try {
				// const user_id = localStorage.getItem('user_id'); //старое
				const user_id = store.rootGetters['user/userId'];//добавил

				const response = await this.$axios.get(`/works/${user_id}`);

				//данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				response.data.forEach(obj => {
					obj.photo = this.$axios.defaults.baseURL+'/'+obj.photo
				})

				store.commit("SET_WORKS", response.data.reverse());// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				console.error(error)
			}
		},
		async add(store, work) {
			// new FormData() по умолчанию это <form enctype='multipart/form-data' >...</form> что бы обработать файл в input. Форма с перезагрузкой страницы.
			const formData = new FormData();
			Object.keys(work).forEach(el => {
				formData.append(el, work[el])
			})

			// test
			// for(let [name, value] of formData) {
			// 	console.log(`${name}:${value}`);
			// }

			try {
				const response = await this.$axios.post('/works', formData)

				//данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				response.data.photo =  this.$axios.defaults.baseURL+'/'+response.data.photo

				store.commit('ADD_WORK', response.data)

			} catch (error) {
				console.error(error)
			}
		},
		async edit(store, work){
			const formData = new FormData();
			Object.keys(work).forEach(el => {
				// formData.append(`${el}`,`${work[el]}`)//почему это не работает (${work[el]} странный обьект)
				// console.log(`${el}`,`${work[el]}`)
				formData.append(el, work[el])
			})

			try {
				let {data} = await this.$axios.post(`/works/${work.id}`, formData); //не передаём внутрь параметры и никакой ответ не получаем

				// //данный перебор должен быть на сервере т.е. пути на фото должны уже приходить нормальные !!!
				work.photo = this.$axios.defaults.baseURL+'/'+data.work.photo;

				store.commit("EDIT_WORK", work);// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async remove(store, work) {
			try {
				const {data} = await this.$axios.delete(`/works/${work.id}`) //не передаём внутрь параметры и никакой ответ не получаем
				store.commit('REMOVE_WORK', work)
			} catch {
				throw new Error(error)
			}
		},
	},
}
//РАБОТАЕТ С works.vue