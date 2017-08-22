import Error from './ValidatorError'

export default {
  email(name, value) {
    value = value === null || typeof value === 'undefined' ? '' : value
    return new Promise((resolve, reject) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(value)) resolve()
      reject(new Error(name, `${name} is not a valid email`))
    })
  },

  alpha(name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[A-z]+$/
      if (re.test(value)) resolve()
      const error = new Error(name, `${name} field only allows alphabet`)
      reject(error)
    })
  },

  alpha_dash(name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[a-zA-Z0-9-_]+$/
      if (re.test(value)) resolve()
      const error = new Error(name, `${name} field only allows alphabet, dash and underscore characters`)
      reject(error)
    })
  },

  alpha_numeric(name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[a-zA-Z0-9]*$/
      if (re.test(value)) resolve()
      const error = new Error(name, `${name} field must be alpha numeric`)
      reject(error)
    })
  },

  between(name, value, params = []) {
    return new Promise((resolve, reject) => {
      const min = parseInt(params[0])
      const max = parseInt(params[1])
      let length = value.length
      if (length > min && length < max) resolve()
      reject(new Error(name, `${name} field must be between ${min} and ${max}`))
    })
  },

  url(name, value) {
    return new Promise((resolve, reject) => {
      // regex from @diegoperini see https://mathiasbynens.be/demo/url-regex and https://gist.github.com/dperini/729294
      const re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
      if (re.test(value)) resolve()
      reject(new Error(name, `${name} field must be a valid url`))
    })
  }

}