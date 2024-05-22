import { shallowMount } from '@vue/test-utils'
import LibForm, { FormOptions } from '../../packages/form'
import { it, describe, expect } from 'vitest'
describe('LibForm.vue', () => {
  const { location } = window
  // beforeEach(() => {
  //   Object.defineProperty(window, 'location', {
  //     writable: true,
  //     value: { href: '' }
  //   })
  // })
  // afterEach(() => {
  //   window.location = location
  // })
  it('default LibForm render', () => {
    const msg = 'test'
    const props = {
      options: Array<FormOptions>,
      httpRequest: Function
    }
    const wrapper = shallowMount(LibForm, { props })
    // should have the right text
    expect(wrapper.text()).toBe(msg)
    // should be default div tag
    expect(wrapper.element.tagName).toBe('el-form')
    expect(wrapper.getComponent('LibForm')).toBeTruthy()
  })
})
