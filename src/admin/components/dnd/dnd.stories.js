import dnd from "./dnd.vue";
import { action } from "@storybook/addon-actions";//ловим $emit

const methods = {
	onChangeFile: action('onLoadFile_up'),
	onChangeImg: action('onLoadImg_up'),
}

export default {
	title: "dnd",
	components: { dnd },
};

export const defaultView = () => ({
	components: { dnd },
	template: `
		<dnd
		@onLoadFile='onChangeFile'
		@onChangeImg='onChangeFile'
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
		@onLoadFile='onChangeFile'
		@onChangeImg='onChangeImg'
		:imgSrc_="'https://picsum.photos/300/300'"
		/>
	`,
	methods
});

viewImgSrc.story = {
	name: "DND first img",
};