/**
 * Returns the first parent element with specified class
 * @param $element
 * @param $class
 * @returns {Element}
 */
const parent =  ($element, $class) => {
  while (($element = $element.parentElement) && !$element.classList.contains($class));
  return $element;
}

export const bootstrap = (results, $form) => {
  const reset = (element) => {
    const group = formGroup(element)
    if(group) {
      Array.map(group.getElementsByClassName('help-block'), element => {
        element.remove()
      })
    }
  }
  const success = (group, element) => {
    group.classList.remove('has-error')
    group.classList.add('has-success')
  }

  const error = (group, element, result) => {
    group.classList.remove('has-success')
    group.classList.add('has-error')
    const feedback = document.createElement('span')
    feedback.classList.add('help-block')
    feedback.innerHTML = result[0].message
    group.appendChild(feedback)
  }

  const formGroup = (element) => {
    return parent(element, 'form-group')
  }

  // add success state for every input
  for(let element of $form.elements) {
    reset(element)
    const group = formGroup(element)
    if(group) success(group, $form.elements[name])
  }

  Object.keys(results).map(name => {
    error(formGroup($form.elements[name]), $form.elements[name], results[name])
  })
}