import ValidationError from './ValidatorError'
import dates from './Dates'
import strings from './Strings'
import numbers from './Numbers'

var validators = Object.assign({
    required(name, value) {
      return new Promise(function (resolve, reject) {
        if (typeof value === 'undefined' || value === null || value == '') {
          reject(new ValidationError(name, `${name} field is required.`))
        } else {
          resolve()
        }
      })
    },

    boolean(name, value) {
      return new Promise((resolve, reject) => {

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