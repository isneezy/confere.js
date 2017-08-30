<template>
    <section class="container mt-4">
        <h4>Intalation and usage</h4>
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
    </section>
</template>

<script>
    import codeBlock from './CodeBlock.vue'
    import HtmlForms from './snipets/HtmlForms.vue'
    export default {
      components: {
        codeBlock, HtmlForms
      }
    }
</script>