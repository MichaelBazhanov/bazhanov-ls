import headline from "./headline.vue";
import { action } from "@storybook/addon-actions";//ловим $emit
// import { text, withKnobs } from '@storybook/addon-knobs';//добавляем динамические поля

const methods = {
	onChange: action('onChange_up') //onChange_up всплывает с данными из реального Vue компонента
}

export default {
	title: 'headline',
	components: { headline },
	// decorators: [ withKnobs ],
}

export const defaultView = () => ({
	components: { headline },
	// props: {
	// 	title: {
	// 		default: text('title', 'Панель управления 21232312')
	// 	}
	// },
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