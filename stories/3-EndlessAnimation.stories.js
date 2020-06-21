import React from 'react'
import Animate from '../src'
import { select, button, boolean } from '@storybook/addon-knobs'
import { createSection, animations, delays, events, speeds } from './utils'

export default createSection('Endless Animation')

let key = 0

export const Example = () => {
  const label = 'Run Animation'
  const reRender = () => (key += 1)

  button(label, reRender)

  return (
    <Animate
      key={key}
      infinite={boolean('Infinite', true)}
      enter={select('Enter', animations, animations[0])}
      delay={select('Delay', [...delays, null], null)}
      speed={select('Speed', [...speeds, null], null)}
      {...events}>
      Animate Reactor
    </Animate>
  )
}
