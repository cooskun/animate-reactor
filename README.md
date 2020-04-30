# Animate Reactor

A component that makes Animate.css a React Component

Animate Reactor created to animate things with power of Animate.css. To use this component effectively, have a look this [animation list](https://github.com/daneden/animate.css#user-content-animations).

## Install

### With NPM

`npm install animate-reactor`

### With Yarn

`yarn add animate-reactor`

## Usage

```javascript
import Animate from 'animate-reactor'

const Component = () => {
  return (
    <Animate enter="shake" delay={3} speed="faster">
      Shake Me!
    </Animate>
  )
}
```

## Enter and Leave

Animate Reactor can get two animation which triggers after each other. Which means, you can have a **simple** timeline with this. See on example.

```javascript
<Animate enter="fadeIn" leave="fadeOut">
  Welcome and Good bye
</Animate>
```

## Endless Animation

To create an endless animation use `infinite` prop.

```javascript
<Animate enter="shake" infinite>
  Endless Shake!
</Animate>
```

An **important** note. If you set this prop, `leave, onEnterEnd, onLeaveEnd, onEachEnd` props will be disabled since the enter animation never ends. This is not an Animate Reactor bug. This is a part of nature of CSS Animations.

## Power of callbacks

Animate Reactor let your callbacks have a place on each part of the animation process.

```javascript
<Animate
  enter="bounce"
  onEachAction={() => console.log('Something happened')}
  onEachStart={() => console.log('Something started')}
  onEachEnd={() => console.log('Something ended')}
  onEnterStart={() => console.log('Enter animation started')}
  onEnterEnd={() => console.log('Enter animation ended')}
  onLeaveStart={() => console.log('Leave animation started')}
  onLeaveEnd={() => console.log('Leave animation ended')}>
  Endless Shake!
</Animate>
```

## Custom CSS Support

You can get support of CSS to make your animations even stronger.

```javascript
<Animate
  enter="bounce"
  style={{
    animationDelay: '10s',
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out',
  }}>
  I am powered by CSS.
</Animate>
```

## Props References

### enter

First animation. Pick one of animation list from [the list](https://github.com/daneden/animate.css#user-content-animations).

### leave

Second animation. This runs right after first animation.

### infinite

Make the animation infinite (endless).

| Prop     | Values     | Default |
| -------- | ---------- | ------- |
| infinite | true/false | false   |

### delay

Delay time before animation start. If you have both enter and leave animation, it will impact twice.

| Value | Values |
| ----- | ------ |
| 1     | 1s     |
| 2     | 2s     |
| 3     | 3s     |
| 4     | 4s     |
| 5     | 5s     |

**Note** If those values wasn't enough, you can use inline CSS via style prop.

### speed

Animation speed in string base.

| Value  | Speed Time |
| ------ | ---------- |
| slow   | 2s         |
| slower | 3s         |
| fast   | 800ms      |
| faster | 500ms      |

### onEnterStart

Triggers when enter animation starts.

### onEnterEnd

Triggers when enter animation ends.

### onLeaveStart

Triggers when leave animation starts.

### onLeaveEnd

Triggers when leave animation ends

### onEachStart

Triggers when enter and leave animation starts.

### onEachEnd

Triggers when enter and leave animation ends.

### onEachAction

Triggers when enter and leave animations starts and ends.
