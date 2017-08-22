class ValidatorError extends Error {
  /**
   * @param field *optional
   * @param message *optional
   */
  constructor(field, message) {
    super(message)
    this.field = field
  }
}

export default ValidatorError
