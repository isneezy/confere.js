<template>
    <section class="container mt-4">
        <h4>Installation and usage</h4>
        <section class="row">
            <section class="col-md-12">
                <h5>Install via npm</h5>
                <code-block>$ npm install confere.js --save</code-block>

                <h5 class="mt-3">Basic usage</h5>
                <code-block language="JavaScript">var Confere = require('confere.js') // not required when using the browser distribution
var validator = new Confere({
    rules: {
        'name': 'required|min:3|max:30',
        'surname': 'required|min:3|max:30',
        'email': 'required|email|min:3'
    }
})

validator.validate({
    'name': 'John',
    'surname': 'Do'
}).then(function () {
    //do something... data is valid
}).catch(function (error) {
    console.log(error.message) // Some information is missing or incorrect
    console.log(error.result) // Object { email: Array[3], surname: Array[1]}
    console.log(error.result.email[0].message) // email field is required.
})              </code-block>
            </section>
        </section>

        <html-forms></html-forms>
        <section class="row">
            <section class="col-md-12 mt-3">
                <h4>Avaliable validation rules</h4>
                <p>Below is a list of all available validation rules and their function:</p>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <td>Rule</td><td>Description</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="validator in validators">
                        <td><code>{{validator.name}}</code></td>
                        <td v-html="validator.description"></td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </section>
        <AjaxValidator></AjaxValidator>
        <section class="row mt-4">
            <section class="col-md-12 mt-3">
                <h4>Avaliable Decorators</h4>
                <p>Below is a list of all available form decorators function:</p>
                <table class="table">
                    <thead>
                        <tr>
                            <td>Name</td><td>Framework/Usage</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bootstrap4</td><td>Use with bootstrap4 forms</td>
                        </tr>
                        <tr>
                            <td>bootstrap3</td><td>Use with bootstrap3 forms</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    </section>
</template>

<script>
    import codeBlock from './CodeBlock.vue'
    import HtmlForms from './snipets/HtmlForms.vue'
    import AjaxValidator from './snipets/CustomAjaxValidator.vue'
    import validators from './data/validators'
    export default {
      computed: {
        validators () {
          return validators.sort(function (a, b) {
            return a.name > b.name
          })
        }
      },
      components: {
        codeBlock, HtmlForms, AjaxValidator
      }
    }
</script>