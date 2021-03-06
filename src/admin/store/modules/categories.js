export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: []
	},
	mutations: {
		SET_CATEGORIES: (state, categories) => (state.data = categories ),
		ADD_CATEGORIES: (state, category) => state.data.unshift(category),
		REMOVE_CATEGORIES: (state, categoryTo) => {
			state.data = state.data.filter(category => category.id != categoryTo.id)
			//если имя в категории не равно имени пришедшему то проходит в результирующий массив
		},
		EDIT_CATEGORIES: (state, newCategory) => {
			state.data = state.data.map(category => {
				return category.id == newCategory.id ? newCategory : category
			})
		},
		ADD_SKILL: (state, newSkill) => {
			state.data = state.data.map(category => {
				if(category.id == newSkill.category) {//что бы скилл добавлялся в его категорию
					category.skills.push(newSkill)
				}
				return category;
			})
		},
		REMOVE_SKILL: (state, skillToRemove) => {
			state.data = state.data.map(category => {
				if(category.id == skillToRemove.category) {//удаляем скилл из его категорию
					//сравнение категории скила и родителя категории
					category.skills = category.skills.filter(skill =>
						skill.id != skillToRemove.id
					)
				}
				return category;
			})
		},
		EDIT_SKILL: (state, skillToEdit) => {

			//в найденной категории мы пройдемся по всем скилам и сгенерируем новый массив
			const editSkillInCategory = category => {
				category.skills = category.skills.map( skill => {
					return skill.id == skillToEdit.id ? skillToEdit : skill
					//если id скила равен id измененного скила то заменяем
				})
			}

			//находим категорию для скила
			const findCategory = category => {
				if(category.id == skillToEdit.category) {
					editSkillInCategory(category)
				}
				return category;
			}

			//снова перебираем data
			state.data = state.data.map(findCategory)
		}
	},
	actions: {
		async create(store, title) {//создание категории
			try {
				let response = await this.$axios.post('/categories', {'title':title})
				response.data.skills = []
				store.commit("ADD_CATEGORIES", response.data);// вызываем мутацию и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async fetch(store) {//получение всех категорий по id
			try {
				// const user_id = localStorage.getItem('user_id'); //старое
				const user_id = store.rootGetters['user/userId'];//добавил

				let response = await this.$axios.get(`/categories/${user_id}` ) //376
				store.commit("SET_CATEGORIES", response.data);// вызываем мутацию и отдаем туда данные вторым параметром

			} catch (error) {
				throw new Error(error)
			}
		},
		async remove({commit}, category){
			try {
				const {data} = await this.$axios.delete(`/categories/${category.id}`); //не передаём внутрь параметры и никакой ответ не получаем
				commit("REMOVE_CATEGORIES", category);// вызываем мутацию и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async edit({commit}, category){
			try {
				const {data} = await this.$axios.post(`/categories/${category.id}`, {title: category.category}); //не передаём внутрь параметры и никакой ответ не получаем
				commit("EDIT_CATEGORIES", category);// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
	}
}
//РАБОТАЕТ С about.vue