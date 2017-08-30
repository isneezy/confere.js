<template>
    <section class="row">
        <section class="col-md-12 mt-4">
            <h4>Custom Validation Rules</h4>
            <p>
                cofere.js provides a simple and extensive api so it makes it easier to register or write your own validation rules. <br/>
                To achieve this goal you may use the method <code>validator(name, handler)</code> exposed in the Confere object!<br/>
            </p>
            <p>In the example below we will register a simple validator that makes an ajax request to github server and check if specified repository exists</p>
        </section>
        <section class="col-md-6">
            <form @submit.prevent="validate" data-decorator="bootstrap4">
                <section class="form-group">
                    <label>Github repository</label>
                    <input type="text" name="repository" class="form-control" data-rule="required|repo_exists">
                </section>
                <input type="submit" class="btn btn-primary" value="Validate"/> <a class="btn btn-link" href="" @click.prevent="code = !code">Show code</a>
            </form>
        </section>
        <section class="col-md-12 mt-3" v-if="code">
            <h6>JS code:</h6>
            <code-block language="JavaScript">Confere.validator('repo_exists', function(){
    return new Promise(function (resolve, reject) {
        const error = new Error("Repository doesnot exists")
        error.field = name // this is needed by the decorators
        axios.get(`https://api.github.com/search/repositories?q=${value}`).then(function (response) {
            // you need to install axios https://github.com/mzabriskie/axios
            if (response.data.items.length === 1 && response.data.items[0].full_name === value) {
                resolve()
            } else {
                reject(error)
            }
        }).catch(function () {
            reject(error)
        })
    })
})

// instantiate confere.js
const validator = new Confere({
    rules: htmlFormElement
})

// validate on submit
htmlFormElement.addEventListener('submit', function () {
    e.preventDefault()
    htmlFormElement.target.classList.addClass('validating') // my be you want to show your user that your are doing something
    validator.validate().then(function(){
        htmlFormElement.target.classList.removeClass('validating')
    }).catch(function(){
        htmlFormElement.target.classList.removeClass('validating')
    })
})
</code-block>
        </section>
    </section>
</template>
<script>
    import axios from 'axios'
    import Confere from '../../../Confere'
    import codeBlock from '../CodeBlock.vue'
    export default {
      data: () => ({
        code: false
      }),
      mounted () {
        Confere.validator('repo_exists', (name, value) => {
          return new Promise((resolve, reject) => {

            const error = new Error("Repository doesnot exists")
            error.field = name // this is needed by the decorators

            axios.get(`https://api.github.com/search/repositories?q=${value}`).then(response => {
              if (response.data.items.length === 1 && response.data.items[0].full_name === value) {
                resolve()
              } else {
                reject(error)
              }
            }).catch(() => {
              reject(error)
            })
          })
        })
      },
      methods: {
        validate (e) {
          e.target.classList.addClass('validating')
          const validator = new Confere({
            rules: e.target
          })

          validator.validate().then(() => {
            e.target.classList.remove('validating')
          })
        }
      },
      components: {
        codeBlock
      }
    }
</script>