import Vue from "vue";
import Vuex from "vuex";
import pnr from "./pnr";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: ""
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    }
  },
  getters: {
    page(state) {
      return state.page;
    }
  },
  actions: {
    setPage({ commit }, page) {
      commit("setPage", page);
    }
  },
  modules: { pnr }
});
