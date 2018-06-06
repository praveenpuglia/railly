import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PnrStatus from "./views/pnr/PnrStatus.vue";
import PnrHome from "./views/pnr/PnrHome.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/pnr",
      component: PnrHome,
      name: "pnrHome"
    },
    {
      name: "pnrStatus",
      path: "/pnr/:pnrNumber",
      component: PnrStatus
    }
  ]
});
