import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'font-awesome/css/font-awesome.css'
import VCharts from 'v-charts'
import EVueTest from 'e-vue-test/lib/e-vue-test.common.js'
import EVueEsrimap from 'e-vue-esrimap'
import essenceUI from 'essence-ui'

// console.log(essence)

Vue.use(VCharts)
Vue.use(EVueTest)
// Vue.use(EVueEsrimap);
Vue.use(essenceUI)
Vue.config.productionTip = false
Vue.use(EVueEsrimap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
