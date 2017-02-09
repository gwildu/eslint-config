'use strict'

var customEnvironments = require('./custom-environments')

module.exports = {
  extends: 'standard',
  installedESLint: true,
  plugins: [
    'standard',
    'promise',
    'html',
    'vue'
  ],
  settings: {
    'html/indent': '+2'
  },
  rules: {
    'no-console': [ 'error', { allow: [ 'warn', 'error', 'info' ] } ],
    'object-curly-spacing': [ 'error', 'always' ]
  },
  env: {
    jasmine: true
  },
  globals: Object.assign(
    {},
    customEnvironments
  )
}
