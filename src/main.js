import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store'; //调用返回对象
import './mock'; //直接在顶部使用
import flexible from "lib-flexible";
import './registerServiceWorker';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  flexible,
  render: h => h(App)
}).$mount('#app')
