import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import mock from './mock';
import flexible from "lib-flexible";
import './registerServiceWorker';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  mock,
  flexible,
  render: h => h(App)
}).$mount('#app')
