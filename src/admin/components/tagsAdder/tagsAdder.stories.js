import tagsAdder from "./tagsAdder.vue";
import { action } from "@storybook/addon-actions"

const methods = {
	onChange: action('onChange_up')
}

export default {
	title: "tagsAdder",
	components: { tagsAdder },
};

export const defaultView = () => ({
	components: { tagsAdder },
	template: `
		<!-- <div> -->
		<!-- <pre>{{tags}} проверка данных исходящих от v-model</pre> -->
			<tagsAdder v-model="tags" @change="onChange"/>
		<!-- </div> -->
	`,
	//@change="onChange" - это не нужно? чисто пример как на storybook всплывает v-model
	data() {
		return {
			tags: "One, Two, Three, four"
		}
	},
	methods
});

defaultView.story = {
	name: "Стандартный вид"
}
export const tagsErrorMessage = () => ({
	components: { tagsAdder },
	template: `
		<tagsAdder v-model="tags" @change="onChange" :errorMessage='String(true)'/>
	`,

	data() {
		return {
			tags: "One, Two, Three, four",
		}
	},
	methods
});

tagsErrorMessage.story = {
	name: "add props errorMessage"
}
