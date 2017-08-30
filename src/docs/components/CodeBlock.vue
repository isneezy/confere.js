<template>
<pre><code v-highlight :class="language"><slot></slot></code></pre>
</template>

<script>
    export default {
      props: ['language', 'path']
    }
</script>