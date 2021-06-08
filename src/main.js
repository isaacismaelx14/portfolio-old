import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "toastify-js/src/toastify.css";

window.addEventListener("load", () => {});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
