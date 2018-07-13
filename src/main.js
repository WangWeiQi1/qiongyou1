// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false;
global.API_PROXY = 'https://bird.ioliu.cn/v2?url=';

global.API_PROXY1 = 'https://bird.ioliu.cn/v2?url=';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
