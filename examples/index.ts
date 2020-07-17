import Vue from 'vue'
import router from './routes'
import App from './app.vue'

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
}).$mount('#app')
