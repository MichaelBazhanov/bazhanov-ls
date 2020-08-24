import temp from "./template.vue";

export default {
	title: "temp",
	components: { temp },
};

export const defaultView = () => ({
	components: { temp },
	template: `
		<temp />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
