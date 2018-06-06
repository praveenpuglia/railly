import Vue from "vue";
import Vuex from "vuex";
import pnr from "./pnr";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: ""
  },
  mutations: {},
  getters: {
    page(state) {
      return state.page;
    }
  },
  actions: {},
  modules: { pnr }
});
