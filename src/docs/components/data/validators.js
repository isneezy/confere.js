export default [
  {
    name: 'required',
    description: 'The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:<br/>' +
    '- The value is null <br/>' +
    '- The value is an empty string <br/>'
  },

  {
    name: 'boolean',
    description: ''
  },

  {
    name: 'min:value',
    description: 'The field under validation must have a minimum value. Strings, numerics, arrays, and files are evaluated in the same fashion using <code>Array.length</code> attribute'
  },

  {
    name: 'max:value',
    description: 'The field under validation must be less than or equal to a maximum value. Strings, numerics, arrays, and files are evaluated in the same fashion using <code>.length</code> attribute'
  },

  {
    name: 'email:value',
    description: 'The field under validation must be formatted as an e-mail address.'
  },

  {
    name: 'alpha',
    description: 'The field under validation must be entirely alphabetic characters.'
  },

  {
    name: 'alpha_dash',
    description: 'The field under validation may have alpha-numeric characters, as well as dashes and underscores.'
  },

  {
    name: 'alpha_numeric',
    description: 'The field under validation must be entirely alpha-numeric characters.'
  },

  {
    name: 'between:min,max',
    description: 'The field under validation must have a size between the given min and max. Strings, numerics, and arrays are evaluated in the same fashion using <code>.length</code> attribute'
  },

  {
    name: 'url',
    description: 'The field under validation must be a valid URL. This uses regular expression from regex from <a target="_blank" href="https://github.com/dperini/">@diegoperini</a>, see <a target="_blank" href="https://mathiasbynens.be/demo/url-regex">https://mathiasbynens.be/demo/url-regex</a> and <a target="_blank" href="https://gist.github.com/dperini/729294">https://gist.github.com/dperini/729294</a>'
  },

  {
    name: 'date',
    description: 'The field under validation must be a valid date.'
  },

  {
    name: 'after:date',
    description: 'The field under validation must be a value after a given date.'
  },

  {
    name: 'after_or_equal:date',
    description: 'The field under validation must be a value after or equal to the given date. For more information, see the after rule.'
  },

  {
    name: 'before:date',
    description: 'The field under validation must be a value preceding the given date.'
  },

  {
    name: 'before_or_equal:date',
    description: 'The field under validation must be a value preceding or equal to the given date.'
  },

  {
    name: 'digits:value',
    description: 'The field under validation must be numeric and must have an exact length of value.'
  },

  {
    name: 'digits_between:min,max',
    description: 'The field under validation must have a length between the given min and max.'
  },

  {
    name: 'integer',
    description: 'The field under validation must be an integer.'
  }
]