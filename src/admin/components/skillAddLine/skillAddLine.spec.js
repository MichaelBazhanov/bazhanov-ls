import skillAddLine from "./skillAddLine"
import roundBtn from "../button/types/roundBtn";
import button from "../button";
import { mount, shallowMount } from "@vue/test-utils"

it('Проверка на разблокированный skillAddLine emit c button', async () => {
	//steps
	const wrapper = mount(skillAddLine, {
		propsData: { //устанавливаем props
			blocked: Boolean(false)
		},
		data() { //устанавливаем data
			return {
				skill: {
					title: '',
					percent: 0,
				}
			}
		}
	})

	// //actions
	// await wrapper.setProps({blocked: Boolean(true)}) //блокировка
	const findButton = wrapper.findComponent(button)
	// const rBtn = findButton.findComponent(roundBtn)
	// console.log(findButton);
	// console.log(findButton.vm.$options);


	// const child = await findButton.vm.$options.components.round();
	// console.log(child);
	// const list = findButton.vm.$listeners; //берем событие/функцию click
	// console.log(findButton.vm.$listeners);

	// findButton.vm.$on('click', function (msg) { //кастомная установка события
	// 	console.log(msg)
	// })
	// findButton.vm.$emit('click', 'hi') //кастомное возбуждение события

	// await findButton.setProps({is: roundBtn})       //выбираем тип кнопки
	// await findButton.setProps({type: String('round')}) //выбираем тип кнопки
	// console.log(findButton.props());
	// console.log(findButton.vm.$props);
	// console.log(findButton.vm.$listeners.click);
	findButton.vm.$emit('approve', wrapper.vm.$data.skill)


	//checked
	// await findButton.trigger('click');
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	// console.log(wrapper.emitted());
	// expect(wrapper.emitted('approve')[0]).toEqual(wrapper.vm.$data.skill);//событие было вызвано с определенными данными
})