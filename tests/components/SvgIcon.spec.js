import { shallowMount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon'

describe('SvgIcon.vue', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(SvgIcon, {
			propsData: {
				name: 'test',
			},
		})
		expect(wrapper.find('svg').exists()).toBe('#icon-test')
	})
})
