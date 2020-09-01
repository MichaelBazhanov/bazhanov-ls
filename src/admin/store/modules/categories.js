export default {
	namespaced: true, //для идентификация конкретных настроек
	state: {
		data: []
	},
	actions: {
		async create(store, title) {
			try {
				const response = await this.$axios.post('/categories', {'title':title})
				console.log(response)
			} catch (error) {
				console.dir(error)
			}
		}
	}
}