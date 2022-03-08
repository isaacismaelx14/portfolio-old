<template>
  <transition :name="direction" mode="in-out">
    <li class="project item">
      <div class="card">
        <img :src="item.img" alt="" class="card_image" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="card__header-text">
              <h3 class="card__title">{{ item.title }}</h3>
              <div class="card__tags">
                <span
                  v-for="(tag, index) in item.tags"
                  :key="index"
                  :index="index"
                  class="card__tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <div class="card__description">
            <p>{{ item.summary }}</p>
            <div class="card__link">
              <a :href="item.link" target="_blank" class="btn__github">
                <span class="">
                  {{item.btn}}
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </li>
  </transition>
</template>

<script>
export { default } from "./ProjectItem.controller";
</script>

<style lang="scss" scoped>
@import "./styles/ProjectItem.style.scss";
</style>
