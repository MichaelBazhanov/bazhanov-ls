import dnd from "./dnd.vue";
import { action } from "@storybook/addon-actions";//ловим $emit

const methods = {
	onChange: action('loadimg_up')
}

export default {
	title: "dnd",
	components: { dnd },
};

export const defaultView = () => ({
	components: { dnd },
	template: `
		<dnd
		@loadimg='onChange'
		/>
	`,
	methods
});

defaultView.story = {
	name: "Стандартный вид"
}
