import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import './assets/fonts/font.scss'
import Dialog from './components/dialog'
import Input from './components/input'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
new Vue({
  render: h => h(App)
}).$mount('#app')
