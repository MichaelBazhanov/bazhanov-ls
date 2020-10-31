import link from "./link.vue";

export default {
	title: "link",
	components: { link },
};

export const defaultView = () => ({
	components: { link },
	template: `
		<link :href="http://loftschool.ru" :target="_blank"/>
	`,
});

defaultView.story = {
	name: "Стандартный вид"
}
