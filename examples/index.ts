import Vue from 'vue'
import router from './routes'
import App from './app.vue'
import ZZUI from '@/index.ts'

// highlight
import VueHighlightJS, { Options } from 'vue-highlight.js'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'
import 'highlight.js/styles/default.css'

// components
import DemoBlok from './components/demo-block.vue'
import ApiDoc from './components/api-doc.vue'

Vue.use(ZZUI)
Vue.use<Options>(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue,
  },
})
Vue.component('demo-block', DemoBlok)
Vue.component('api-doc', ApiDoc)

new Vue({
  // eslint-disable-line
  render: h => h(App),
  router,
}).$mount('#app')
