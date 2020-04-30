const callback = func => {
  if (typeof func === 'function') {
    func()
  }
}

export default callback
