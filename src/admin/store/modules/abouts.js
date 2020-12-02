export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: [],
	},
	mutations: {
		SET_ABOUT: (state, abouts) => state.data = abouts,
		// ADD_ABOUT: (state, about) => state.data.unshift(about),
		EDIT_ABOUT: (state, about) => {
			state.data = state.data.map(item => {
				return about.id == item.id ? about : item
			})
		},
		// REMOVE_ABOUT: (state, about) => {
		// 	state.data = state.data.filter(item => about.id != item.id)
		// },

	},
	actions: {//ЗДЕСЬ НЕТ API С СЕРВЕРА ТАК ЧТО ДЕЛАЮ ЭМУЛЯЦИЮ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		fetch(store) { //данная мутация срабатывает когда мы только загружаем страницу что бы на ней что то отобразить.
			try {
				// 1) Получаем данные по API c сервера
				// let {data} = this.$axios.get('/about'); //не используется _ пустышка
				const data = [
					{
						'id' : '1',
						'photo' : 'https://picsum.photos/300/300',
						'age' : '32',
						'city' : 'Владимир',
						'birthday' : '15 ноября 1987',
						'name' : 'Бажанов Михаил',
						'description' : 'Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.',
					}
				]

				// 2) Устанавливаем данные в state
				store.commit("SET_ABOUT", data);// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				console.error(error)
			}
		},
		async edit(store, about){
			try {
				//1) отдаем новые данные на сервер
				// let {data} = await this.$axios.post(`/about/${review.id}`, formData); //не передаём внутрь параметры и никакой ответ не получаем

				//2) Записываем эти новые данные во vuex
				store.commit("EDIT_ABOUT", about);// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
	}

}