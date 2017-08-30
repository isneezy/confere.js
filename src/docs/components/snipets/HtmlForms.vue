<template>
    <section class="row mt-4">
        <h5 class="col-md-12 mb-3">HTML Form Validation (<b>Form Decorators</b>)</h5>
        <section class="col-md-12">
            <p>
                To display the validation results on the ui without having to write our own logic, we use form decorators.
                And there are many available form decorators for each framework and you can even declare your own if needed.<br/>
                In the example below will use the bootstrap4 from decorator.
            </p>
        </section>
        <section class="col-md-6">
            <h6>HTML code:</h6>
            <code-block language="html">&lt;form id="my-form" data-decorator="bootstrap-4"&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Name&lt/label&gt;
        &lt;input name="name" class="form-control" data-rule="required|min:3|max:35"/&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Email&lt/label&gt;
        &lt;input name="email" class="form-control" data-rule="required|email|min:3|max:35"/&gt;
    &lt;/div&gt;
    &lt;input type="submit" value="Validate"/&gt;
&lt;/form&gt;   </code-block>
            <h6>Javascript code:</h6>
            <code-block language="javascript">
document.getElementById('my-form').addEventHandler('submit', function (e) {
    e.preventDefault()
    var validator = new Confere({
        rules: this // pass form element to be handled by confere
    })
    validator.validate().then(() => {
        // submit the form, it is valid
    }).catch(function() {
        // no need to do anything, confere.js will handle it for you :)
    })
})</code-block>
        </section>
        <section class="col-md-6">
            <h6>Final result:</h6>
            <form @submit.prevent="validate" data-decorator="bootstrap4">
                <section class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="name" data-rule="required|min:3|max:35">
                </section>
                <section class="form-group">
                    <label>Email</label>
                    <input class="form-control" name="email" data-rule="required|email|min:3|max:35">
                </section>
                <input class="btn btn-primary" type="submit" value="Validate">
            </form>
        </section>
    </section>
</template>

<script>
  import Confere from '../../../Confere'
  import codeBlock from '../CodeBlock.vue'
  export default {
    methods: {
      validate (e) {
        const validator = new Confere({
          rules: e.target
        })

        validator.validate().catch(() => {})
      }
    },
    components: {
      codeBlock
    }
  }
</script>