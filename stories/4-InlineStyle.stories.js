import React from 'react'
import Animate from '../src'
import { select, button, object } from '@storybook/addon-knobs'
import { createSection, animations, events } from './utils'

export default createSection('Inline Style')

let key = 0

export const Example = () => {
  const label = 'Run Animation'
  const reRender = () => (key += 1)

  button(label, reRender)

  return (
    <Animate
      key={key}
      enter={select('Enter', animations, 'bounce')}
      className="storybook-test"
      style={object('Style', {
        animationDuration: '800ms',
        animationDelay: '0s',
        animationIterationCount: 1,
      })}
      {...events}>
      Animate Reactor
    </Animate>
  )
}
