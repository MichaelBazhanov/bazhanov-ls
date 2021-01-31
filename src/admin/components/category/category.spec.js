import category from './category'
import { mount } from "@vue/test-utils"

it('Category snapshot', async () => {
	//steps
	const wrapper = mount(category)

	//actions
	//check
	expect(wrapper.element).toMatchSnapshot()
})