import dnd from "./dnd.vue";
import { action } from "@storybook/addon-actions";//ловим $emit

const methods = {
	onChange: action('onLoadFile_up')
}

export default {
	title: "dnd",
	components: { dnd },
};

export const defaultView = () => ({
	components: { dnd },
	template: `
		<dnd
		@onLoadFile='onChange'
		/>
	`,
	methods
});

defaultView.story = {
	name: "Стандартный вид"
}

export const viewImgSrc = () => ({
	components: { dnd },
	template: `
		<dnd
		@onLoadFile='onChange'
		:imgSrc_="'https://picsum.photos/300/300'"
		/>
	`,
	methods
});

viewImgSrc.story = {
	name: "DND first img",
};