import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import './assets/fonts/font.scss'
import Dialog from './components/dialog'
import Input from './components/input'
import Switch from './components/switch'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
new Vue({
  render: h => h(App)
}).$mount('#app')
