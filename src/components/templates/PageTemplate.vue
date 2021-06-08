<template>
  <div>
    <navbar />
    <slot />
    <!-- <h2>Footer</h2> -->
  </div>
</template>

<script lang="ts">
import navbar from "../Navbar/Navbar.vue";
export default {
  name: "PageTemplate",
  components: {
    navbar,
  },
};
</script>
