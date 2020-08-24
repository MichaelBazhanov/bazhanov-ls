import skill from "./skill.vue";
import { action } from "@storybook/addon-actions";

const methods = {
	onApprove: action("onApprove"),
	onRemove: action("onRemove"),
}

export default {
	title: "skill",
	components: { skill },
};

export const defaultView = () => ({
	components: { skill },
	data() {
		return {
			skill: {
				id:0,
				title:'test',
				percent:0,
			}
		}
	},
	template: `
		<skill
			@approve="onApprove"
			@remove="onRemove"
			:skill="skill"
		/>
	`,
	methods,
});

defaultView.story = {
	name: "Стандартный вид"
}
