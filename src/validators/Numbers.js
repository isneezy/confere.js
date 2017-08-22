import Error from './ValidatorError'

export default {
  min(name, value, params) {
    value = value === null || typeof value === 'undefined' ? '' : value
    return new Promise((resolve, reject) => {
      var min = parseInt(params[0])
      if (value.length < min) reject(new Error(name, `${name} field must have at least ${min} chars in length`))
      else resolve()
    })
  },

  max(name, value, params) {
    value = value === null || typeof value === 'undefined' ? '' : value
    return new Promise((resolve, reject) => {
      var max = parseInt(params[0])
      if (value.length > max) reject(new Error(name, `${name} field must not pass ${max} chars in length`))
      else resolve()
    })
  },

  digits(name, value) {
  }
}