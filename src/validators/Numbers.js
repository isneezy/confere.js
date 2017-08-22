import Error from './ValidatorError'

export default {
  digits(name, value, params = []) {
    return new Promise((resolve, reject) => {
      if (/^\d+$/.test(value) && String(value).length == parseInt(params[0])) resolve()
      reject(new Error(name, `${name} field must be digits with size = ${params[0]}`))
    })
  }
}