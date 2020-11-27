import header from "./header.vue";

export default {
	title: "header",
	components: { header },
};

export const defaultView = () => ({
	components: { header },
	template: `
		<header />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
