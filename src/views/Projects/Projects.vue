<template>
  <section class="projects-page">
    <div class="header"><span class="title">Projects</span></div>
    <div class="projects_container">
      <ul class="projects">
        <div class="use-bootstrap" v-if="isLoading">
          <div
            class="container text-center"
            style="transform: scale(1.5); width:50px"
          >
            <div class="spinner-border text-primary mt-4" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

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
