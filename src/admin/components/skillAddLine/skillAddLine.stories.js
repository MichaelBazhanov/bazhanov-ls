import skillAddLine from "./skillAddLine.vue";

export default {
	title: "skillAddLine",
	components: { skillAddLine },
};

export const defaultView = () => ({
	components: { skillAddLine },
	template: `
		<skillAddLine />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
