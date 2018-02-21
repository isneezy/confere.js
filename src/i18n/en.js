export default {
  validations: {
    digits: ':name field must be digits with size = :param1',
    digits_between : ':name  must be digits with size between :params0 and :params1',
    integer : ':name  field must be digits with size =  :params0',

    date: ':name field is not a valid date',
    after: ':name field should be after :params0',
    after_or_equal: ':name field should be equal or greater than :params0',
    before: ':name field must be a date before :params0',
    before_or_equal: ':name field must be a date before or equal :params0',

    min: ':name field must have at least :min chars in length',
    max: ':name field must not pass :max chars in length',
    email: ':name is not a valid email',
    alpha: ':name field only allows alphabet',
    alpha_dash: ':name field only allows alphabet, dash and underscore characters',
    alpha_numeric: ':name field must be alpha numeric',
    between: ':name field must be between :min and :max',
    url: ':name field must be a valid url',


  },
  fields: {
    name: 'Name',
    min: 'Minimum',
    max: 'Maximum'
  }
}