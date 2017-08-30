import Vue from 'vue'
import App from './App.vue'
import hljs from 'highlight.js'



const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

Vue.directive('highlight', function (el) {
  // el.innerHTML = hljs.fixMarkup(escapeHtml(el.innerHTML))
  hljs.highlightBlock(el)
})

const app = new Vue({
  ...App
})
app.$mount('#app')