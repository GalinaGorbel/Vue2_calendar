import Vue from 'vue'
import App from './App.vue'

import TheUl from './components/TheUl'
import TheHeader from './components/TheHeader'

Vue.config.productionTip = false

Vue.component('the-ul', TheUl);
Vue.component('the-header', TheHeader);

new Vue({
  render: h => h(App),
}).$mount('#app')
