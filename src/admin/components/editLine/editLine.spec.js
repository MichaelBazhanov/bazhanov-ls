import editLine from "./editLine"
import icon from "../icon"
import {mount, shallowMount} from "@vue/test-utils"

it('проверка на заблокированный input (тест editmode)', async () => {
	//steps
	const wrapper = shallowMount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(false) }) //1 вариант заблокированного input

	//check
	expect(wrapper.find('.icon').exists()).toBe(true)
})

it('проверка что по клику всплывает $emit', async () => {
	//steps
	const wrapper = mount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(false) }) //1 вариант заблокированного input
	const btnIcon = wrapper.findComponent(icon); //находим дочерний нужный элемент icon
	await btnIcon.trigger('click'); //делаем клик

	//check
	expect(wrapper.emitted('blocked')).toBeTruthy(); //слушаем событие $emit было вызвано или нет
})

it('проверка на разблокированный input  (тест editmode)', async () => {
	//steps
	const wrapper = shallowMount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(true) }) //2 вариант разблокированного input

	//check
	expect(wrapper.find('.buttons').exists()).toBe(true)
})