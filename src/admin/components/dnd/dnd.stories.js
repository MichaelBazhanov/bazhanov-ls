import dnd from "./dnd.vue";

export default {
	title: "dnd",
	components: { dnd },
};

export const defaultView = () => ({
	components: { dnd },
	template: `
		<dnd />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
