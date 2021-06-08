<template>
  <div>
    <router-link to="/about-me" class="nav-item" active-class="active-link">
      About Me
    </router-link>
    <router-link to="/projects" class="nav-item" active-class="active-link">
      Projects
    </router-link>
    <router-link to="/contact" class="nav-item" active-class="active-link">
      Contact
    </router-link>
    <a
      href="https://github.com/isaacismaelx14"
      class="nav-item"
      target="_blank"
    >
      <GithubIcon
        style="width: 40px"
        @mouseover="hoverOnGit = true"
        @mouseleave="hoverOnGit = false"
        :hover="hoverOnGit"
        class="no-mobile"
      />
      <GithubIcon
        style="width: 40px"
        @mouseover="hoverOnGit = true"
        @mouseleave="hoverOnGit = false"
        :hover="hoverOnGit"
        class="mobile-only"
        catColor="#4447f8"
      />
      <span class="mobile-only">Github page</span>
    </a>
  </div>
</template>

<script>
import GithubIcon from "../../Icons/GithubIcon";

export default {
  name: "Nav",
  components: { GithubIcon },
  data: function() {
    return { hoverOnGit: false };
  },
};
</script>
