import user from "./user.vue";


export default {
	title: 'user',
	components: { user }
}

export const defaultView = () => ({
	template: `
		<user/>
	`,
	components: { user },
})

defaultView.story = {
	name: 'Стандартный вид',
}