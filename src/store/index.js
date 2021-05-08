import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme:false
  },
  getters:{
    getTheme: state => {
      return state.darkTheme;
    }
  },
  mutations: {
    SET_THEME(state, darkTheme) {
      state.darkTheme = darkTheme;
    }
  },
  actions: {},
  modules: {},
});
