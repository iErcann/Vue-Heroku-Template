import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
