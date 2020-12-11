<template>
	<div class="tags-adder-component">
		<app-input
			title="Добавление тега"
			v-model="currentTags"
			@input="$emit('change', currentTags)"
		/>
		<ul class="tags">
			<li class="tag"
			v-for="(tag, index) in tagsArray"
			:key="`${tag}${index}`"
			v-if="tag.trim()"
			>
			<tag
				interactive
				:title="tag"
				@click="removeTag(tag)"
			/>
			</li>
		</ul>
	</div>
</template>

<script>
import appInput from "../input";
import tag from "../tag";

export default {
	data() {
		return {
			currentTags: this.tags
		}
	},
	watch:{
		//этот вач нужен для того что бы currentTags принимал значение входящих параметров всегда ибо
		//без него первая отрисовка помпонента сработает хорошо а последующий нет
		tags(value) {
			this.currentTags = value
		}
	},
	props: {
		tags: {
			type: String,
			default: ""
		}
	},
	model: {
		prop: "tags",
		event: "change"
	},
	components: {
		appInput,
		tag,
	},
	computed: {
		tagsArray() {//превращаем строку в массив
			// console.log('this.tags        ',this.tags)
			// console.log('this.currentTags ',this.currentTags)
			return this.currentTags.trim().split(', ');
		},
	},
	methods: {
		removeTag(tag) {
			const tags = [...this.tagsArray]; //копируем массив из computed
			const tagNdx = tags.indexOf(tag); //находим индекс который нужно удалить

			if (tagNdx < 0) return; //если не найден то возврат

			tags.splice(tagNdx, 1); //удаляем один индекс начиная с 1 ого
			this.currentTags = tags.join(', '); //создаем из наших тего массив и отдаем в текущий

			this.$emit('change', this.currentTags);//проброс данных родительнсому компоненту
		}
	}
}
</script>


<style lang="postcss" src="./tagsAdder.pcss" scoped>
</style>
