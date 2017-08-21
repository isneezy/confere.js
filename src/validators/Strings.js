export default {
  alpha (name, value) {
    return new Promise((resolve, reject) => {
      const re = /^[A-z]+$/;
      if (re.test(value)) resolve()
      reject(new Error(`${name} field only allows alphabet`))
    })
  }
}