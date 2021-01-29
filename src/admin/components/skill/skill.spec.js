import skill from "./skill"
import icon from "../icon"
import input from "../input"
import { mount, shallowMount } from "@vue/test-utils"

it('Проверка на заблокированный skill ', async () => {
	//steps
	const wrapper = shallowMount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
		// data() {
		// 	return {
		// 		currentSkill: {
		// 			editmode: true,
		// 		}
		// 	}
		// }
	})

	// //actions

	//checked
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(false)
	expect(wrapper.vm.$refs['skill-closed']).toBeDefined(); //блок skill действительно заблокирован
})
it('Проверка на разблокированный skill ', async () => {
	//steps
	const wrapper = shallowMount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
		data() {
			return {
				currentSkill: {
					editmode: true,
				}
			}
		}
	})

	// //actions

	//checked
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(true)
	expect(wrapper.vm.$refs['skill-open']).toBeDefined(); //блок skill действительно заблокирован
})
//////////////////////////////////////////////////////////////////////////////////////
it("Заблокированный skill, 1) проверка входа в режим редактирования skill", async () => {
	//steps
	const wrapper = mount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
	})

	//checked
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(false) //заблокированный skill

	// //actions
	const btn = wrapper.findAllComponents(icon);
	const btnEdit = btn.at(0);
	const btnRemove = btn.at(1);

	//checked
	await btnEdit.trigger('click') //1
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(true)//1
})
it("Заблокированный skill, 2) проверка $emitted на удаление", async () => {
	//steps
	const wrapper = mount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
	})

	//checked
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(false) //заблокированный skill

	// //actions
	const btn = wrapper.findAllComponents(icon);
	const btnEdit = btn.at(0);
	const btnRemove = btn.at(1);

	//checked
	await btnRemove.trigger('click') //2
	expect(wrapper.emitted('remove')).toBeTruthy(); //2
})
//////////////////////////////////////////////////////////////////////////////////////
it("Разблокированный skill, 1) проверка на создание skill", async () => {
	//steps
	const wrapper = mount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
		data() {
			return {
				currentSkill: {
					editmode: true, //разблокированный skill
				}
			}
		}
	})

	//checked
	// console.log(wrapper.vm.$data.currentSkill.editmode)
	expect(wrapper.vm.currentSkill.editmode).toBe(true) //разблокированный skill

	// //actions
	const btns = wrapper.findAllComponents(icon);
	const btnApprove = btns.at(0);
	// const btnBlocked = btns.at(1);

	//checked
	await btnApprove.trigger('click')
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	expect(wrapper.emitted('approve')).toBeTruthy();//событие было вызвано
	expect(wrapper.emitted('approve')[0][0]).toEqual(wrapper.vm.currentSkill);//событие было вызвано с определенными данными
})
it("Разблокированный skill, 2) проверка входа в режим блокировки skill", async () => {
	//steps
	const wrapper = mount(skill, {
		propsData: { //устанавливаем props, без них компонент не монтируется
			skill: {
				id: '1',
				title: '2',
				percent: '3',
				category: '4',
			}
		},
		data() {
			return {
				currentSkill: {
					editmode: true, //разблокированный skill
				}
			}
		}
	})

	//checked
	// console.log(wrapper.vm.$data.currentSkill.editmode)
	expect(wrapper.vm.currentSkill.editmode).toBe(true) //разблокированный skill

	// //actions
	const btns = wrapper.findAllComponents(icon);
	// const btnApprove = btns.at(0);
	const btnBlocked = btns.at(1);

	//checked
	await btnBlocked.trigger('click')
	expect(wrapper.vm.$data.currentSkill.editmode).toBe(false)
})