export default {
  alpha (name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[A-z]+$/;
      if (re.test(value)) resolve()
      const error = new Error(`${name} field only allows alphabet`)
      error.field = name
      reject(error)
    })
  },

  alpha_dash (name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[a-zA-Z0-9-_]+$/
      if (re.test(value)) resolve()
      const error = new Error(`${name} field only allows alphabet, dash and underscore characters`)
      error.field = name
      reject(error)
    })
  },

  alpha_numeric (name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[a-zA-Z0-9]*$/
      if (re.test(value)) resolve()
      const error = new Error(`${name} field must be alpha numeric`)
      error.field = name
      reject(error)
    })
  }
}