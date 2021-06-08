<template>
  <section class="carousel">
    <div class="container" :class="setClass" :style="style">
      <slot />
    </div>

    <button @click="next" class="next float-btn" v-show="useButtons">
      next
    </button>
    <button @click="prev" class="prev float-btn" v-show="useButtons">
      prev
    </button>
  </section>
</template>

<script lang="ts">
export { default } from "./carousel.controller";
</script>

<style lang="scss" scoped>
@import "./styles/carousel.style.scss";
</style>
