import tagsAdder from "./tagsAdder.vue";

export default {
	title: "tagsAdder",
	components: { tagsAdder },
};

export const defaultView = () => ({
	components: { tagsAdder },
	template: `
		<tagsAdder />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
