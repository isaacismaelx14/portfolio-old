<template>
  <section class="mt-header">
    <h2><span>&lt;</span> {{ title }} <span>/&gt;</span></h2>
    <div class="message-area">
      <span class="title"
        >Sorry, <span class="colored">I'm still working</span> on my
        portfolio.</span
      >
      <EngeenierIcon :width="200" id="EngIcon1" />
      <span class="subtitle"
        >But you can see the progress of my portfolio on
        <a href="https://github.com/isaacismaelx14/portfolio" target="_blank"
          >Github</a
        ></span
      >
    </div>
  </section>
</template>

<script lang="ts">
import EngeenierIcon from "../Icons/EngeenierIcon.vue";
import gsap from "gsap";
export default {
  name: "Working",
  props: {
    title: {
      type: String,
      default: "Temporal Page",
    },
  },
  components: {
    EngeenierIcon,
  },
  mounted: function() {
    const playAgain = () => {
      tl.play(0);
    };
    const tl = gsap.timeline({ onComplete: playAgain });
    tl.from("#EngIcon1", {
      rotateZ: -360,
      duration: 4,
      ease: "bounce",
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
h2 {
  font-size: 30px;
  color: $color3;
}
.message-area {
  & {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $colorFonts;
    margin-top: 40px;
  }
  img {
    margin-top: 10px;
    width: 200px;
  }
  .title {
    font-size: 50px;
  }

  .colored {
    color: $color1;
  }
  .subtitle {
    margin-top: 20px;
    font-size: 23px;
  }

  a {
    color: $color1;
    text-decoration: none;
    font-weight: bold;
  }
}

/* Smartphones ----------- */
@media only screen and (min-width: 321px) and (max-width: 600px) {
  .message-area {
    .title {
      font-size: 34px;
    }
  }
}
</style>
