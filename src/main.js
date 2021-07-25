import Vue from 'vue'
import App from './App.vue'

import TheUl from './components/TheUl'

Vue.config.productionTip = false

Vue.component('the-ul', TheUl)

new Vue({
  render: h => h(App),
}).$mount('#app')
