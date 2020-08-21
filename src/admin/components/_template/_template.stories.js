import _template from "./_template.vue";

export default {
	title: "_template",
	components: { _template },
};

export const defaultView = () => ({
	components: { _template },
	template: `
		<_template />
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
