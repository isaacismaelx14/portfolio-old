import { createStore } from "vuex";
import schemeTheme from "../modules/schemeTheme";

const _IsDEV = process.env.NODE_ENV === "production" ? false : true;
export default createStore({
  state: {
    isDev: _IsDEV,
    server: () =>
      _IsDEV
        ? "http://localhost:4000"
        : "https://portfoliobackndimart.herokuapp.com",
  },
  mutations: {},
  actions: {},
  modules: { schemeTheme },
});
