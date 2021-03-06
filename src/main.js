// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'
import SocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
Vue.use(SocialSharing)
Vue.use(VueAnalytics, {
  id: 'UA-109683884-1',
  checkDuplicatedScript: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
