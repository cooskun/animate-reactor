import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>animate-reactor Demo</h1>
        <Example enter="shake">Animation</Example>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
