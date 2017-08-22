import Error from './ValidatorError'
import dates from './Dates'
import strings from './Strings'
import numbers from './Numbers'

var validators = Object.assign({
    required(name, value) {
      return new Promise(function (resolve, reject) {
        if (typeof value === 'undefined' || value === null || value == '') {
          reject(new Error(name, `${name} field is required.`))
        } else {
          resolve()
        }
      })
    },

    boolean(name, value) {
      return new Promise((resolve, reject) => {
        if((value === 'true' || value === 1 || value === true) || (value === 'false' || value === 0 || value === false)) resolve()
        reject(new Error(name, `${name} field must be boolean`))
      })
    }
  },
  dates,
  strings,
  numbers
)

export default validators
export {
  validators
}