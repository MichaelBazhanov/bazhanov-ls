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
		work
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
		work
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
		@onLoadFile='onChangeFile'
		@onChangeImg='onChangeFile'
		:imgSrc_="''"
		user
		/>
	`,
	methods
});

dndUserView.story = {
	name: "DND User not dnd"
}