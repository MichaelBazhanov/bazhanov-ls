import headline from './headline'
import { shallowMount } from "@vue/test-utils"

it('headline snapshot + emitted()', async () => {
	//steps
	const wrapper = shallowMount(headline)

	//actions
	await wrapper.find('.btn').trigger('click');

	//check
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	expect(wrapper.emitted('logout')[0]).toEqual(['logout'])
	expect(wrapper.element).toMatchSnapshot()
})