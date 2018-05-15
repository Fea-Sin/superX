/* eslint-disable no-undef */

import { mount } from '@vue/test-utils'
import Hello from '../src/components/HelloWorld.vue'

describe('Component', () => {
  test('是一个 Vue 实例', () => {
    const wrapper = mount(Hello)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
