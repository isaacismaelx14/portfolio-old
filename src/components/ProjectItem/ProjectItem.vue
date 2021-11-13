<template>
  <transition :name="direction" mode="in-out">
    <div class="project item" v-show="visibleItem === index">
      <div class="top">
        <div class="header" v-show="item.useTitle">
          <h2 class="title">{{ item.title }}</h2>
        </div>

        <div class="body">
          <div v-html="getItem(item)"></div>
          <img :src="item.img" :alt="item.title" v-if="item.img" />
        </div>
      </div>

      <div class="footer">
        <a
          class="btn btn-danger"
          :href="item.github"
          v-if="item.github"
          target="_blank"
        >
          View on github
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export { default } from "./ProjectItem.controller";
</script>

<style lang="scss" scoped>
@import "./styles/ProjectItem.style.scss";
</style>
