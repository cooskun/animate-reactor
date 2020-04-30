import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Component from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays an animation label', () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toBeTruthy()
    })
  })
})
