import headline from "./headline.vue";
import { action } from "@storybook/addon-actions";

const methods = {
	onChange: action('onChange')
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
			<h2>323232323</h2>
		</headline>
	`,
	components: { headline },
	methods,
})

defaultView.story = {
	name: 'Стандартный вид',
}