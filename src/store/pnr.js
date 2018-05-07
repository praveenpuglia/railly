import axios from "axios";
export default {
  state: {
    status: null,
    loading: false,
    dataLoaded: false
  },
  mutations: {
    setPnrStatus(state, status) {
      state.status = status;
    },
    fetchPnr(state, newState) {
      Object.assign(state, newState);
    },
    fetchPnrSuccess(state, newState) {
      Object.assign(state, newState);
    }
  },
  actions: {
    fetchPnr({ commit }, pnrNumber) {
      commit("fetchPnr", { loading: true });
      axios
        .get(
          `https://api.railwayapi.com/v2/pnr-status/pnr/${pnrNumber}/apikey/hw1jytnyce/`
        )
        .then(res => {
          commit("fetchPnrSuccess", {
            status: res.data,
            loading: false,
            dataLoaded: true
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
