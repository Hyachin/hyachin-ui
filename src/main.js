import Vue from 'vue'
import App from './App.vue'

import HyachinUI from '../packages'
Vue.use(HyachinUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
