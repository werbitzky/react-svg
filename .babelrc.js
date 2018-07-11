module.exports = {
  presets: [
    ['@babel/env', { loose: true, modules: process.env.BABEL_OUTPUT || false }],
    '@babel/react'
  ],
  plugins: [['@babel/proposal-class-properties', { loose: true }]]
}
