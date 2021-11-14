<template>
  <PageTemplate>
    <router-view />
  </PageTemplate>
</template>

<script lang="ts">
import PageTemplate from "./components/templates/PageTemplate.vue";
import { mapState, mapMutations } from "vuex";

const URLdomain = window.location.host;

if (
  process.env.NODE_ENV === "production" &&
  URLdomain !== "www.isaacmartinez.dev"
) {
  window.location.href = "https://www.isaacmartinez.dev";
}

const getDefault = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return true;
  return false;
};

const isDarkMode = (varName) => {
  const storagedValue = localStorage.getItem(varName);
  if (storagedValue){
    return storagedValue === "true";
  }
  return getDefault();
};

export default {
  components: {
    PageTemplate,
  },
  mounted: function() {
    isDarkMode(this.localStorageName)
      ? this.setDarkMode(true)
      : this.setDarkMode(false);

      console.log(this.server());
  },
  computed: {
    ...mapState("schemeTheme", ["darkMode"]),
    ...mapState("schemeTheme", ["localStorageName"]),
    ...mapState(["server"])
  },
  methods: {
    ...mapMutations("schemeTheme", ["setDarkMode"]),
  },
};
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import "./assets/bootstrap.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
  transition: background-image 0.3s ease-in-out;
}
html {
  scroll-behavior: smooth;
  // overflow-x: hidden;
}

body {
  background: $colorDominant;
}

body::-webkit-scrollbar {
  display: none;
}

.toast-primary {
  background: $color1;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.no-selection {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

.mt-header {
  padding: 80px 20px;
}

.btn {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: #fff;
  padding: 10px 30px;
  font-size: 18px;
  min-width: 80px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  &:hover {
    box-shadow: 0 0 0 1.4px $colorFonts;
  }
  &:disabled {
    background: #5c5c5c;
  }
}

.btn-primary {
  background: $color1;
}
</style>
