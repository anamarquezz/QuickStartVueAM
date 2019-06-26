import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'vuetify/dist/vuetify.min.css'

import 'vuetify/dist/vuetify.min.css'
import vuetify from 'vuetify';

Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
