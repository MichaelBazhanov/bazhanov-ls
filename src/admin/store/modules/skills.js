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
		remove(){
			console.log('remove');
		},
		edit(){
			console.log('edit');
		},
	}
}
//РАБОТАЕТ С about.vue