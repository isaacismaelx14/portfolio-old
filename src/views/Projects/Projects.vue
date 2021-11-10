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
        <div
          class="container text-center"
          v-if="isLoading"
          style="transform: scale(1.5); width:50px"
        >
          <div class="spinner-border text-primary mt-4"  role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <project-item
          v-for="(projectItem, index) in projects"
          :key="projectItem.id"
          :item="projectItem"
          :visibleItem="actualSlide"
          :index="index"
          :direction="direction"
          v-else
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
