import linkA from "./link.vue";

export default {
	title: "linkA",
	components: { linkA },
};

export const defaultView = () => ({
	components: { linkA },
	template: `
	<linkA class="item-link" href="http://loftschool.ru" target="_blank">
		http://loftschool.ru
	</linkA>
	`,
	data() {
		return {

		}
	}
});

defaultView.story = {
	name: "Стандартный вид"
}
