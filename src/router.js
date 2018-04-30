import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import PnrStatus from "./views/PnrStatus.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pnr",
      name: "pnr",
      component: PnrStatus
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
