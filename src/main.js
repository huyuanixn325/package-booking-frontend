import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
