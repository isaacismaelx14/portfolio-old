export default {
  namespaced: true,
  state: {
    darkMode: false,
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
      if (payload) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    },
  },
};
