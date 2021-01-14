import dnd from "./dnd.vue";
import { action } from "@storybook/addon-actions";//ловим $emit

const methods = {
	onChangeFile: action('onLoadFile_up'),
	onChangeImg: action('onLoadImg_up'),
	onError: action('onError_up'),
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
		@onChangeImg='onChangeImg'
		@onError='onError'
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
		:imgSrc_="'https://picsum.photos/300/300'"
		@onLoadFile='onChangeFile'
		@onChangeImg='onChangeImg'
		@onError='onError'
		/>
	`,
	methods
});

viewImgSrc.story = {
	name: "DND first img",
};

export const dndUserView = () => ({
	components: { dnd },
	template: `
		<dnd
		:imgSrc_="''"
		not_dnd
		@onLoadFile='onChangeFile'
		@onChangeImg='onChangeFile'
		@onError='onError'
		/>
	`,
	methods
});

dndUserView.story = {
	name: "DND User not dnd"
}