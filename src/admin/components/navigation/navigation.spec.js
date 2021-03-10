import navigation from './navigation'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

// const $route = {
// 	path: '/about'
// }

it('Проверка, компонента навигации navigation)', async () => {
	//steps
	const wrapper = shallowMount(navigation, {
		// mocks: {
		// 	$route
		// },
		localVue,
	})


	//active
	// console.log(wrapper.html());
	// console.log(wrapper.vm.$route);
	// console.log(wrapper.vm.$rout);

	//check
	// expect(wrapper.find('p.cardComponentDefaultSlot').classes('cardComponentDefaultSlot')).toBe(true) //проверка что слот вставился
	// expect(wrapper.vm.$refs['card-component-simple']).toBeDefined(); //блок card-component виден/есть/определен
})