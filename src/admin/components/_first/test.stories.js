import test from "./test.vue";
import { action } from "@storybook/addon-actions";//ловим $emit
import { text, withKnobs } from "@storybook/addon-knobs";//добавляем динамические поля

const methods = {
	onChange: action('onChange_up') //onChange_up всплывает с данными из реального Vue компонента
}

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
			@change="onChange"
		/>
	`,
	methods,
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