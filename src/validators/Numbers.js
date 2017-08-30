import Confere from '../Confere'
import Error from './ValidatorError'

export default {
  digits (name, value, params = []) {
    return new Promise((resolve, reject) => {
      if (Confere.isEmpty(value)) resolve()
      if (/^\d+$/.test(value) && String(value).length === parseInt(params[0])) resolve()
      reject(new Error(name, `${name} field must be digits with size = ${params[0]}`))
    })
  },

  digits_between (name, value, params = []) {
    return new Promise((resolve, reject) => {
      if (Confere.isEmpty(value)) resolve()
      if (/^\d+$/.test(value) && (String(value).length > parseInt(params[0]) && String(value).length < parseInt(params[1]))) resolve()
      reject(new Error(name, `${name} field must be digits with size between ${params[0]} and ${params[1]}`))
    })
  },

  integer (name, value) {
    return new Promise((resolve, reject) => {
      if (Confere.isEmpty(value)) resolve()
      if (/^\d+$/.test(value)) resolve()
      reject(new Error(name, `${name} field must be integer`))
    })
  }
}
