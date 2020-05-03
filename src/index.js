import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import 'animate.css'
import { callback, statuses } from './utils'

const Animate = ({
  enter,
  leave,
  infinite,
  delay,
  speed,
  onEnterStart,
  onEnterEnd,
  onLeaveStart,
  onLeaveEnd,
  onEachStart,
  onEachEnd,
  onEachAction,
  children,
  className,
  ...props
}) => {
  const animationRef = useRef()
  const [status, setStatus] = useState(null)
  const [history, setHistory] = useState([])
  const [entered, setEntered] = useState(false)

  const classNames = classnames(className, {
    infinite,
    animated: true,
    [enter]: !!enter && !entered,
    [leave]: !!leave && entered,
    [`delay-${delay}s`]: !!delay,
    [speed]: !!speed,
  })

  useEffect(() => {
    animationRef.current.addEventListener('animationstart', () => {
      !entered
        ? setStatus(statuses.onEnterStart)
        : setStatus(statuses.onLeaveStart)
    })
    animationRef.current.addEventListener('animationend', () => {
      !entered && setEntered(true)
      !entered ? setStatus(statuses.onEnterEnd) : setStatus(statuses.onLeaveEnd)
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
      case statuses.onLeaveStart:
        callback(onLeaveStart)
        break
      case statuses.onLeaveEnd:
        callback(onLeaveEnd)
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

Animate.propTypes = {
  enter: PropTypes.string,
  leave: PropTypes.string,
  infinite: PropTypes.bool,
  delay: PropTypes.number,
  speed: PropTypes.string,
  onEnterStart: PropTypes.func,
  onEnterEnd: PropTypes.func,
  onLeaveStart: PropTypes.func,
  onLeaveEnd: PropTypes.func,
  onEachStart: PropTypes.func,
  onEachEnd: PropTypes.func,
  onEachAction: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
}

export default Animate
