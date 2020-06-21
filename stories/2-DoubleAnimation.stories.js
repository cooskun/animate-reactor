import React from 'react'
import Animate from '../src'
import { select, button } from '@storybook/addon-knobs'
import {
  createSection,
  animations,
  delays,
  events,
  repeats,
  speeds,
} from './utils'

export default createSection('Double Animation')

let key = 0

export const Example = () => {
  const label = 'Run Animation'
  const reRender = () => (key += 1)

  button(label, reRender)

  return (
    <Animate
      key={key}
      enter={select('Enter', animations, animations[0])}
      exit={select('Exit', animations, animations[1])}
      delay={select('Delay', [...delays, null], null)}
      speed={select('Speed', [...speeds, null], null)}
      repeat={select('Repeat', [...repeats, null], null)}
      {...events}>
      Animate Reactor
    </Animate>
  )
}
