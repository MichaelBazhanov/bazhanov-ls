import test from "./test.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
	title: 'test',
	components: { test },
	decorators: [withKnobs]
}
// 1ый вид
export const defaultView = () => ({
	components: { test },
	props: {
		title: {
			default: text('Text', 'Привет Storybook, это мой текст!'),
		},
	},
	template: `
		<test
			:title="title"
			alt="User name"
			src="https://picsum.photos/300/300"
		/>
	`,
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
		/>
	`,
	components: { test },
})
activeView.story = {
	name: "С границей у аватара"
}