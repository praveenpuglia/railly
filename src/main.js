import "material-design-icons/iconfont/material-icons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.use(Vuetify);

sync(store, router);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
