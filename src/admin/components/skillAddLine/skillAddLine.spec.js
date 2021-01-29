import skillAddLine from "./skillAddLine"
import input from "../input"
import roundBtn from "../button/types/roundBtn";
import { mount, shallowMount } from "@vue/test-utils"

it('Проверка на заблокированный skillAddLine ', async () => {
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
	const btnRound = wrapper.findComponent(roundBtn);
	// console.log(btnRound);

	await btnRound.trigger('click');
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	// console.log(btnRound);
	// btnRound.vm.$emit('approve');
	// wrapper.vm.$emit('approve')

	//checked
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	console.log(wrapper.emitted());
	// expect(wrapper.emitted('approve')[0][0]).toEqual(wrapper.vm.skill);//событие было вызвано с определенными данными
})