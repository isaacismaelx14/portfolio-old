<template>
  <section class="projects-page">
    <div class="header"><span class="title">Projects</span></div>
    <div class="projects_container">
      <ul class="projects">
      <project-item
        v-for="(projectItem, index) in projects"
        :key="projectItem.id"
        :item="projectItem"
        :visibleItem="actualSlide"
        :index="index"
        :direction="direction"
      />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
export { default } from "./Project.controller";

</script>

<style lang="scss" scoped>
@import "./styles/Project.style.scss";
</style>
