import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'font-awesome/css/font-awesome.css'
import VCharts from 'v-charts'
import EVueTest from 'e-vue-test/lib/e-vue-test.common.js';
import EVueEsrimap from 'e-vue-esrimap/lib/e-vue-esrimap.common.js'

Vue.use(VCharts)
Vue.use(EVueTest);
Vue.use(EVueEsrimap);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
