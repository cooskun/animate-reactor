import React from 'react'
import Animate from '../src'
import styled from 'styled-components'
import { actions } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  [class*='animate__'] {
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #000;
  }
`

export const createSection = title => {
  return {
    title,
    component: Animate,
    decorators: [storyFn => <Wrapper>{storyFn()}</Wrapper>, withKnobs],
  }
}

export const events = actions({
  onEnterStart: 'Enter animation started',
  onEnterEnd: 'Enter animation ended',
  onExitStart: 'Exit animation started',
  onExitEnd: 'Exit animation ended',
  onEachStart: 'Enter or Exit animation started',
  onEachEnd: 'Enter or Exit animation ended',
  onEachAction: 'Some event triggered',
})

export const speeds = ['slow', 'slower', 'fast', 'faster']

export const delays = [1, 2, 3, 4, 5]

export const repeats = [1, 2, 3]

export const animations = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shakeX',
  'shakeY',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heartBeat',
  'backInDown',
  'backInLeft',
  'backInRight',
  'backInUp',
  'backOutDown',
  'backOutLeft',
  'backOutRight',
  'backOutUp',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInTopLeft',
  'fadeInTopRight',
  'fadeInBottomLeft',
  'fadeInBottomRight',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'fadeOutTopLeft',
  'fadeOutTopRight',
  'fadeOutBottomRight',
  'fadeOutBottomLeft',
  'flip',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedInRight',
  'lightSpeedInLeft',
  'lightSpeedOutRight',
  'lightSpeedOutLeft',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
]
