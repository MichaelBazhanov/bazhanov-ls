import navigation from "./navigation.vue";


export default {
	title: 'navigation',
	components: { navigation }
}

export const defaultView = () => ({
	template: `
		<navigation/>
	`,
	components: { navigation },
})

defaultView.story = {
	name: 'Стандартный вид',
}