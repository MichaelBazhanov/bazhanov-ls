export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: []
	},
	actions: {
		create(store, title) {
			console.log(title, '-----')
		}
	}
}