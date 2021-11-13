<template>
  <div>
    <router-link to="/about-me" class="nav-item" active-class="active-link">
      About me
    </router-link>
    <router-link to="/projects" class="nav-item" active-class="active-link">
      Projects
    </router-link>
    <router-link to="/contact" class="nav-item" active-class="active-link">
      Contact
    </router-link>

    <Slider class="no-mobile nav-item"/>

    <a
      href="https://github.com/isaacismaelx14"
      class="nav-item no-mobile"
      target="_blank"
      
    >
      <GithubIcon
        style="width: 40px"
        @mouseover="hoverOnGit = true"
        @mouseleave="hoverOnGit = false"
        :hover="hoverOnGit"
        class="no-mobile"
      />

    </a>
  </div>
</template>

<script>
import GithubIcon from "../../Icons/GithubIcon";
import Slider from './Slider';

export default {
  name: "Nav",
  components: { GithubIcon, Slider},
  data: function() {
    return { hoverOnGit: false };
  },
};
</script>
