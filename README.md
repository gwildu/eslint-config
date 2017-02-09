# gwi-eslint-config
The eslint configuration that should be used in ricardo projects

# Install

`npm install gwi-eslint-config

# Usage

This configuration is used in gwi projects in the `.eslintrc.js` file like this:

```javascript
module.exports = require('gwi-eslint-config')
```

The actual linting can be called by a npm script like this:
```json
{
  "scripts": {
    "lint": "eslint src/**/**.js src/**/**.vue"
  }
}
```

And use it in other scripts too. E.g., the build script and of course the test script.

# Contribute

If you want to contribute to this package, make sure, your contribution is well aligned with teams working with that package.

**owner**: @gwildu

**repository**: <https://github.com/gwildu/eslint-config.git>