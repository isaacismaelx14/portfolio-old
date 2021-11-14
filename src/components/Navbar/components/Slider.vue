<template>
  <label class="switch" ref="switch_button">
    <input type="checkbox" v-model="darkMode" @click="switchMode()" />
    <span class="slider round"></span>
    <span class="actual_mode">{{darkMode ? "Dark Mode" : "Light"}}</span>
  </label>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Slider",
  data: function() {
    return {
      darkModeState: () => !this.darkMode,
    };
  },
  computed: {
    ...mapState("schemeTheme", ["darkMode"]),
  },
  methods: {
    ...mapMutations("schemeTheme", ["setDarkMode"]),
    switchMode() {
      this.setDarkMode(!this.darkMode);

      if (this.darkMode) this.$refs.switch_button.classList.add("active");
      else this.$refs.switch_button.classList.remove("active");
    },
  },
};
</script>
