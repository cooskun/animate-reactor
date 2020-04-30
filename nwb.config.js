module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AnimateReactor',
      externals: {
        react: 'React'
      }
    }
  }
}
