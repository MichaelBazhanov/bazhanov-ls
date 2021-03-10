import header from './header'
import { mount } from "@vue/test-utils"

it('header snapshot', async () => {
	//steps
	const wrapper = mount(header, { stubs: ['router-link', 'router-view'] })

	//actions
	await wrapper.vm.$emit('logout', 'logout')

	//check
	await wrapper.vm.$nextTick(); //ожидаем асинхронного обновления всего
	expect(wrapper.emitted('logout')[0]).toEqual(['logout'])
	expect(wrapper.element).toMatchSnapshot()
})