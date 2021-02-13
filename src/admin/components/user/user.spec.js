import user from './user'
import { shallowMount } from "@vue/test-utils"

it('user snapshot + emitted()', async () => {
	//steps
	const wrapper = shallowMount(user)

	//actions
	await wrapper.find('.btn').trigger('click');

	//check
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	expect(wrapper.emitted('logout')[0]).toEqual(['logout'])
	expect(wrapper.element).toMatchSnapshot()
})