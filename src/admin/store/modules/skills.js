export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
	},
	mutations: {
	},
	actions: {
		// {commit} этот как store.commit (деструктуризация по объекту)
		// {commit} нужен для последующей мутации
		async add({commit}, skill){
			try {
				const {data} = await this.$axios.post('/skills', skill);
				commit("categories/ADD_SKILL", data, {root: true});// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async remove({commit}, skillToRemove){
			try {
				const {data} = await this.$axios.delete(`/skills/${skillToRemove.id}`); //не передаём внутрь параметры и никакой ответ не получаем
				commit("categories/REMOVE_SKILL", skillToRemove, {root: true});// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
		async edit({commit}, skillToEdit){
			try {
				const {data} = await this.$axios.post(`/skills/${skillToEdit.id}`, skillToEdit); //не передаём внутрь параметры и никакой ответ не получаем
				commit("categories/EDIT_SKILL", data.skill, {root: true});// вызываем мутацию у другого модуля и отдаем туда данные вторым параметром
			} catch (error) {
				throw new Error(error)
			}
		},
	}
}
//РАБОТАЕТ С about.vue