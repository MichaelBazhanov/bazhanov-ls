import headline from "./headline.vue";
import { action } from "@storybook/addon-actions";

const methods = {
	onChange: action('onChange_up') //onChange2 всплывает с данными из реального Vue компонента
}

export default {
	title: 'headline',
	components: { headline }
}

export const defaultView = () => ({
	template: `
		<headline
			@change="onChange"
			title="Панель управления"
		>
			<h2>это тестовый текст</h2>
		</headline>
	`,
	components: { headline },
	methods,
})

defaultView.story = {
	name: 'Стандартный вид',
}