import editLine from "./editLine"
import icon from "../icon"
import input from "../input"
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

it('проверка на разблокированный input - создание категории, заблокированна ли кнопка', async () => {
	//steps
	const wrapper = mount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(true) }) //2 вариант разблокированного input
	const btnIcons = wrapper.findAllComponents(icon); //находим дочерний нужный элемент icon
	const btn0 = btnIcons.at(0); //первый icon на создание

	//check
	expect(btn0.classes('blocked')).toBe(true); //слушаем событие $emit было вызвано или нет
})

it('проверка на разблокированный input - создание/удаление категории смотрим $emitted', async () => {
	//steps
	const wrapper = mount(editLine);

	//actions
	await wrapper.setData({ editmode: Boolean(true) }) //2 вариант разблокированного input
	const btnIcons = wrapper.findAllComponents(icon); //находим дочерний нужный элемент icon
	const btn0 = btnIcons.at(0); //первый icon на создание
	const btn1 = btnIcons.at(1); //второй icon на удаление

	await wrapper.setProps({ value:'test value'}) //спускаем prop value что бы разблокировать кнопку СОЗДАТЬ(btn0)
	await btn0.trigger('click'); //делаем клик
	await btn1.trigger('click'); //делаем клик

	//check
	// console.log(wrapper.emitted())
	expect(wrapper.emitted('approve')).toBeTruthy(); //слушаем событие $emit было вызвано или нет
	expect(wrapper.emitted('remove')).toBeTruthy(); //слушаем событие $emit было вызвано или нет
})

it('проверка на разблокированный input - $emitted', async () => {//НЕРАБОЧИЙ !!!!!!!!!!!!!!
	//steps
	const wrapper = mount(editLine);

	//actions
	wrapper.vm.$emit('input')
	wrapper.vm.$emit('approve')

	//check
	// console.log(wrapper.emitted())
	expect(wrapper.emitted('input')).toBeTruthy(); //слушаем событие $emit было вызвано или нет
	expect(wrapper.emitted('approve')).toBeTruthy(); //слушаем событие $emit было вызвано или нет
})