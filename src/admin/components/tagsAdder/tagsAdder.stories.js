import tagsAdder from "./tagsAdder.vue";

export default {
	title: "tagsAdder",
	components: { tagsAdder },
};

export const defaultView = () => ({
	components: { tagsAdder },
	template: `
		<!-- <div> -->
		<!-- <pre>{{tags}} проверка данных исходящих от v-model</pre> -->
			<tagsAdder v-model="tags"/>
		<!-- </div> -->
	`,
	data() {
		return {
			tags: "One, Two, Three, four"
		}
	}
});

defaultView.story = {
	name: "Стандартный вид"
}
