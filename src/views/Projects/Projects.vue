<template>
  <section class="projects-page">
    <div class="body use-bootstrap">
      <div class="header"><span class="title">Last projects</span></div>
      <carousel
        @next="next"
        @prev="prev"
        class="carousel-container"
        :useButtons="projects.length > 1"
      >
        <project-item
          v-for="(projectItem, index) in projects"
          :key="projectItem.id"
          :item="projectItem"
          :visibleItem="actualSlide"
          :index="index"
          :direction="direction"
        />
      </carousel>
    </div>
  </section>
</template>

<script lang="ts">
export { default } from "./Project.controller";
</script>

<style lang="scss" scoped>
@import "./styles/Project.style.scss";
</style>
