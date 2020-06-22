import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import 'animate.css'
import { callback, statuses } from './utils'

const Animate = ({
  animate = true,
  enter,
  exit,
  infinite,
  delay,
  repeat,
  speed,
  children,
  className,
  onEnterStart,
  onEnterEnd,
  onExitStart,
  onExitEnd,
  onEachStart,
  onEachEnd,
  onEachAction,
  ...props
}) => {
  const animationRef = useRef()
  const [status, setStatus] = useState(null)
  const [history, setHistory] = useState([])
  const [entered, setEntered] = useState(false)

  const classNames = classnames(className, {
    animate__animated: animate,
    animate__infinite: infinite,
    [`animate__${enter}`]: !!enter && !entered,
    [`animate__${exit}`]: !!exit && entered,
    [`animate__${speed}`]: !!speed,
    [`animate__delay-${delay}s`]: !!delay,
    [`animate__repeat-${repeat}`]: !!repeat && !infinite,
  })

  useEffect(() => {
    animationRef.current.addEventListener('animationstart', () => {
      !entered
        ? setStatus(statuses.onEnterStart)
        : setStatus(statuses.onExitStart)
    })

    animationRef.current.addEventListener('animationend', () => {
      !entered && setEntered(true)
      !entered ? setStatus(statuses.onEnterEnd) : setStatus(statuses.onExitEnd)
    })
  }, [entered])

  useEffect(() => {
    const statusIsInvalid = !Object.values(statuses).includes(status)
    const statusIsTracked = history.includes(status)

    if (!status || statusIsInvalid || statusIsTracked) {
      return
    }

    status && setHistory([...history, status])

    callback(onEachAction)

    if (statuses.onEachStart.includes(status)) {
      callback(onEachStart)
    } else if (statuses.onEachEnd.includes(status)) {
      callback(onEachEnd)
    }

    switch (status) {
      case statuses.onEnterStart:
        callback(onEnterStart)
        break
      case statuses.onEnterEnd:
        callback(onEnterEnd)
        break
      case statuses.onExitStart:
        callback(onExitStart)
        break
      case statuses.onExitEnd:
        callback(onExitEnd)
        break
      default:
        break
    }
  }, [status])

  return (
    <div className={classNames} ref={animationRef} {...props}>
      {children}
    </div>
  )
}

export default Animate

Animate.propTypes = {
  animate: PropTypes.bool,
  enter: PropTypes.string.isRequired,
  exit: PropTypes.string,
  infinite: PropTypes.bool,
  delay: PropTypes.number,
  speed: PropTypes.string,
  repeat: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onEnterStart: PropTypes.func,
  onEnterEnd: PropTypes.func,
  onExitStart: PropTypes.func,
  onExitEnd: PropTypes.func,
  onEachStart: PropTypes.func,
  onEachEnd: PropTypes.func,
  onEachAction: PropTypes.func,
}
