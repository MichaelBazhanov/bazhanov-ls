import category from "./category.vue";


export default {
	title: 'category',
	components: { category }
}

export const defaultView = () => ({
	template: `
		<category/>
	`,
	components: { category },
})

defaultView.story = {
	name: 'Стандартный вид',
}