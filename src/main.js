import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import './assets/fonts/font.scss'
import Dialog from './components/dialog'
import Input from './components/input'
import Switch from './components/switch'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
new Vue({
  render: h => h(App)
}).$mount('#app')
