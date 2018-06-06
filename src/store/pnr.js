import axios from "axios";
export default {
  state: {
    status: null,
    fetchingPnrStatus: false,
    dataLoaded: false,
    searchedPnrs: []
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
    },
    fetchSearchedPnrSuccess(state, searchedPnrs) {
      Object.assign(state, { searchedPnrs });
    }
  },
  getters: {
    searchedPnrs: state => {
      return state.searchedPnrs;
    }
  },
  actions: {
    fetchPnr({ commit, dispatch }, pnrNumber) {
      commit("fetchPnr", { fetchingPnrStatus: true });
      axios
        .get(
          `https://api.railwayapi.com/v2/pnr-status/pnr/${pnrNumber}/apikey/hw1jytnyce/`
        )
        .then(res => {
          commit("fetchPnrSuccess", {
            status: res.data,
            fetchingPnrStatus: false,
            dataLoaded: true
          });
          dispatch("saveSearchedPnr", res.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    fetchSearchedPnrs({ commit, state }) {
      const searchedPnrs = window.localStorage.searchedPnrs;
      commit(
        "fetchSearchedPnrSuccess",
        searchedPnrs ? JSON.parse(searchedPnrs) : state.searchedPnrs
      );
    },
    saveSearchedPnr({ dispatch, state }, searchResults) {
      let searchedPnrs = window.localStorage.searchedPnrs;
      searchedPnrs = searchedPnrs
        ? JSON.parse(searchedPnrs)
        : state.searchedPnrs;
      searchedPnrs.push(searchResults);
      window.localStorage.searchedPnrs = JSON.stringify(searchedPnrs);
      dispatch("fetchSearchedPnrs");
    }
  }
};
