<template>
    <section>
        <top></top>
        <v-content></v-content>
    </section>
</template>

<script>
    import Top from './components/Top.vue'
    import vContent from './components/Content.vue'
    export default {
      components: {
        Top, vContent
      }
    }
</script>

<style lang="scss">
    @import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");
    @import url('https://fonts.googleapis.com/css?family=Great+Vibes|Source+Sans+Pro:400,600,700|Source+Code+Pro');
    @import url("//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css");
    @import "~highlight.js/styles/github.css";
    body {
        font-family: 'Source Sans Pro', sans-serif;
        color: #3E3636;
        // font-family: 'Great Vibes', cursive;
        // font-family: 'Source Code Pro', monospace;
    }

    .container{
        max-width: 1024px;
    }

    .btn-outline-primary{
        border-color: #7CACBF;
        color: #20474A;
        &:hover{
            background-color: transparentize(#7CACBF,.9);
            color: #20474A;
            border-color: #7CACBF;
        }
    }

    code {
        font-family: 'Source Code Pro', monospace;
    }
</style>