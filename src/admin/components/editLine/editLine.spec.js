import editLine from "./editLine.vue"
import {shallowMount} from "@vue/test-utils"

it('проверка на заблокированный input', async () => {
	//steps
	const wrapper = shallowMount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(false) }) //1 вариант заблокированного input

	//check
	expect(wrapper.find('.icon').exists()).toBe(true)
})

it('проверка на разблокированный input', async () => {
	//steps
	const wrapper = shallowMount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(true) }) //2 вариант разблокированного input

	//check
	expect(wrapper.find('.buttons').exists()).toBe(true)
})