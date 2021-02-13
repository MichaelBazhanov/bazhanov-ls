import card from './card'
import { mount, shallowMount } from '@vue/test-utils'

const titleSlot = {
  name: 'titleSlot',
  template: '<p class="cardComponentTitleSlot">cardComponentTitleSlot</p>'
}
const contentSlot = {
  name: 'contentSlot',
  template: '<p class="cardComponentContentSlot">cardComponentContentSlot</p>'
}
const defaultSlot = {
  name: 'defaultSlot',
  template: '<p class="cardComponentDefaultSlot">cardComponentDefaultSlot</p>'
}

it('Проверка, компонент card состояние default (без пропсов)', async () => {
	//steps
	const wrapper = mount(card, {
		slots: {
			title: titleSlot,
			content: contentSlot,
		}
	})

	//active
	await wrapper.setProps({//взяли компонент и установили на него входящие props
		title: String(""),
		slim: Boolean(false),
		simple: Boolean(false)
	})
	// console.log(wrapper.html());
	// console.log(wrapper.find('p.cardComponentTitleSlot').classes('cardComponentTitleSlot'));

	//check
	expect(wrapper.find('p.cardComponentTitleSlot').classes('cardComponentTitleSlot')).toBe(true) //проверка что слот вставился
	expect(wrapper.find('p.cardComponentContentSlot').classes('cardComponentContentSlot')).toBe(true) //проверка что слот вставился
	expect(wrapper.vm.$refs['card-component-default']).toBeDefined(); //блок card-component виден/есть/определен
})
it('Проверка, компонент card состояние slim)', async () => {
	//steps
	const wrapper = mount(card, {
		slots: {
			title: titleSlot,
			content: contentSlot,
		}
	})

	//active
	await wrapper.setProps({//взяли компонент и установили на него входящие props
		title: String(""),
		slim: Boolean(true),
		simple: Boolean(false)
	})
	// console.log(wrapper.html());

	//check
	expect(wrapper.find('p.cardComponentTitleSlot').classes('cardComponentTitleSlot')).toBe(true) //проверка что слот вставился
	expect(wrapper.find('p.cardComponentContentSlot').classes('cardComponentContentSlot')).toBe(true) //проверка что слот вставился
	expect(wrapper.vm.$refs['card-component-slim']).toBeDefined(); //блок card-component виден/есть/определен
})
it('Проверка, компонент card состояние simple)', async () => {
	//steps
	const wrapper = mount(card, {
		slots: {
			default: defaultSlot,
		}
	})

	//active
	await wrapper.setProps({//взяли компонент и установили на него входящие props
		title: String(""),
		slim: Boolean(false),
		simple: Boolean(true)
	})
	// console.log(wrapper.html());

	//check
	expect(wrapper.find('p.cardComponentDefaultSlot').classes('cardComponentDefaultSlot')).toBe(true) //проверка что слот вставился
	expect(wrapper.vm.$refs['card-component-simple']).toBeDefined(); //блок card-component виден/есть/определен
})

