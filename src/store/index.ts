import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: null as boolean | null,
    user: {}
  },
  mutations: {
    LOG_IN(state, { user }) {
      state.loggedIn = true;
      state.user = user;
    },
    LOG_OUT(state) {
      state.loggedIn = false;
      state.user = {};
    }
  },
  actions: {},
  modules: {}
});
