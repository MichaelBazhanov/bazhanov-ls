import test from "./test.vue";

export default {
	title: 'test',
	components: { test },

}
// 1ый вид
export const defaultView = () => ({
	template: `
		<test
			title="User name"
			alt="User name"
			src="https://picsum.photos/300/300"
		>
	`,
	components: { test },
})
defaultView.story = {
	name: "Стандартный вид"
}
// 2ой вид
export const activeView = () => ({
	template: `
		<test
			title="User name"
			alt="User name"
			src="https://picsum.photos/300/300"
			active
		>
	`,
	components: { test },
})
activeView.story = {
	name: "С границей у аватара"
}