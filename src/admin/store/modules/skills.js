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
			console.log('add');
			console.log(skill);
			try {
				const {data} = await this.$axios.post('/skills', skill);
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