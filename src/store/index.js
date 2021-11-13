import { createStore } from "vuex";
import schemeTheme from "../modules/schemeTheme";
export default createStore({
  state: { test: "i'm a test" },
  mutations: {
    test() {
      return "test";
    },
  },
  actions: {},
  modules: { schemeTheme },
});
