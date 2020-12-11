import headline from "./headline.vue";
import { action } from "@storybook/addon-actions";//ловим $emit

const methods = {
	onChange: action('onChange_up') //onChange_up всплывает с данными из реального Vue компонента
}

export default {
	title: 'headline',
	components: { headline },
}

export const defaultView = () => ({
	components: { headline },
	template: `
		<headline
			@change="onChange"
			title='Панель администрирования'
		>
			<h2>это тестовый текст</h2>
		</headline>
	`,
	methods,
})

defaultView.story = {
	name: 'Стандартный вид',
}