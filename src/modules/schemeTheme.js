export default {
  namespaced: true,
  state: {
    darkMode: false,
    localStorageName: "dark_mode_state",
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
      if (payload) document.body.classList.add("dark-mode");
      else document.body.classList.remove("dark-mode");
      localStorage.setItem(state.localStorageName, payload);
    },
  },
};
