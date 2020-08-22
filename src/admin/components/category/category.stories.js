import category from "./category.vue";
import { action } from "@storybook/addon-actions";

const methods = {
	onRemove: action("onRemove"),
	onRemoveSkill: action("onRemoveSkill"),
	onEditSkill: action("onEditSkill")
};

export default {
	title: "category",
	components: {category}
};

//необходимые данные для отображения
const skills = [
	{ "id": 0, "title": "HTMl", "percent": 80 },
	{ "id": 2, "title": "HTMl2", "percent": 20 },
	{ "id": 3, "title": "HTMl3", "percent": 10 }
];

export const defaultView = () => ({
	components: {category},
	template: `
		<category
			:title="title"
			:skills="skills"
			@remove="onRemove"
			@remove-skill="onRemoveSkill"
			@edit-skill="onEditSkill"
		/>
	`,
	data() {
		return {
			title: "Frontend",
			skills
		}
	},
	methods
});

defaultView.story = {
	name: "Стандартный вид",
};
