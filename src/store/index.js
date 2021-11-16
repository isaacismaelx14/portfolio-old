import { createStore } from "vuex";
import schemeTheme from "../modules/schemeTheme";

const localhost = "http://192.168.1.116:4000";

const _IsDEV = process.env.NODE_ENV === "production" ? false : true;
export default createStore({
  state: {
    isDev: _IsDEV,
    server: () =>
      _IsDEV ? localhost : "https://portfoliobackndimart.herokuapp.com",
  },
  mutations: {},
  actions: {},
  modules: { schemeTheme },
});
