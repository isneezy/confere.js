import dateFn from '../vendor/date'
import Error from './ValidatorError'

export default {
  date(name, value, params, options) {
    return new Promise((resolve, reject) => {
      if (dateFn.isDate(value, options.dateFormat)) resolve()
      reject(new Error(name, `${name} field is not a valid date`))
    })
  },

  after(name, value, params, options) {
    return new Promise((resolve, reject) => {
      var dateFormat = options.dateFormat
      var date = dateFn.getDateFromFormat(value, dateFormat)
      var after = dateFn.getDateFromFormat(params[0], dateFormat)
      if (date > after) {
        resolve()
      }
      reject(new Error(name, `${name} field should be after ${params[0]}`))
    })
  },

  after_or_equal(name, value = '', params = [], options = {}) {
    return new Promise((resolve, reject) => {
      const dateFormat = options.dateFormat
      const date = dateFn.getDateFromFormat(value, dateFormat)
      const after = dateFn.getDateFromFormat(params[0], dateFormat)
      if (date >= after) {
        resolve()
      } else {
        reject(new Error(name, `${name} field should be equal or greater than ${params[0]}`))
      }
    })
  },

  before(name, value = '', params = [], options = {}) {
    return new Promise((resolve, reject) => {
      if (!(dateFn.isDate(value, options.dateFormat) && dateFn.isDate(params[0], options.dateFormat))) resolve()
      const date = dateFn.getDateFromFormat(value, options.dateFormat)
      const before = dateFn.getDateFromFormat(params[0], options.dateFormat)
      if (date < before) resolve()
      reject(new Error(name, `${name} field must be a date before ${params[0]}`))
    })
  },

  before_or_equal(name, value = '', params = [], options = {}) {
    return new Promise((resolve, reject) => {
      if (!(dateFn.isDate(value, options.dateFormat) && dateFn.isDate(params[0], options.dateFormat))) resolve()
      const date = dateFn.getDateFromFormat(value, options.dateFormat)
      const before = dateFn.getDateFromFormat(params[0], options.dateFormat)
      if (date <= before) resolve()
      reject(new Error(name, `${name} field must be a date before or equal ${params[0]}`))
    })
  }
}