import Vue from 'vue';

const inputComp = {
	template: "#input",
	props: ['value'],
	model: {
		prop: "value",
		event: "input",
	}
}
const checkComp = {
	template: "#checkbox",
	props: ['checked'],
	model: {
		prop: 'checked', //вместо value  тут checked
		event: 'change', //это кастомное событие
	}
}

const checkGroup = {
	template: "#check-group",
	props: ['items'],
	data() {
		return {
			inner: this.items, // 	inner: ['red'], если в массиве red и value у элемента red то тогда чекбокс checked
		}
	},
	model: {
		prop: 'items',
		event: 'itemsChange',
	},
	methods: {
		expose() {
			return this.$emit('itemsChange', this.inner)
		}
	}
}

const radioComp = {
	template: "#radio",
	props: ['value'],
	model: {
		event: 'change',
		prop: 'value',
	},
	methods: {
		handleChange(event) {
			this.$emit('change', event.target.value)
			// эмитит тоже самое событие change вверх
		}
	}

}


new Vue({
	template: '#controls',
	el: '#controls-component',
	components: { inputComp, checkComp, checkGroup, radioComp },
	data() {
		return {
			text: "myText",
			yesNo: false,
			group: ["red", "blue"],
			oneOf: "visa"
		}
	},
})
