<template>
  <section class="home page">
    <div class="home-header">
      <div class="container-centered">
        <div class="title-area">
          <div class="img-container">
            <div
              
              id="ProfileImg"
              class="no-selection img"
              loading="lazy"
            />
            <div class="subtitle">Frontend &amp; Backend</div>
            <div class="subtitle">Developer</div>
          </div>
          <h1 class="title" id="HeaderTitle">
            <span>&lt;</span> Hi, I'm Isaac Martinez <span>/&gt;</span>
          </h1>
          <div class="bnt-container no-selection" id="HeaderButtons">
            <router-link to="/about-me" class="btn btn-primary">
              About me
            </router-link>
            <router-link to="/contact" class="btn btn-primary">
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import gsap from "gsap";
import { mapState } from "vuex";


export default {
  name: "Home",
  created: function () {
    document.title = "Portfolio - Isaac Martinez"; //Temp
  },
    computed: {
    ...mapState("schemeTheme", ["darkMode"]),
  },
  mounted: function () {
    gsap.from("#ProfileImg", {
      duration: 1,
      scale: 2.5,
      opacity: 0,
    });
    gsap.from("#HeaderTitle", {
      x: -20,
      opacity: 0,
      delay: 0.5,
    });
    gsap.from("#HeaderButtons", {
      y: 30,
      opacity: 0,
      delay: 1,
    });
    gsap.from(".subtitle", {
      x: 20,
      opacity: 0,
      delay: 1.3,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.home {
  z-index: 1;
  width: 100%;
}
.home-header {
  min-height: 100vh;
  background: $colorDominant;
}

.container-centered {
  & {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $colorFonts;
    padding-top: 100px;
    padding-bottom: 40px;
  }

  .title-area {
    & {
      text-align: center;
    }

    .img-container {
      .img {
        border-radius: 50%;
        box-shadow: 0 0 0 6px $color1;
        width: 180px;
        height: 180px;
        object-fit: contain;
        margin: 0 auto;
        margin-bottom: 20px;
        background: $colorDominant;
        background: $meImage;
        background-size: cover;
        background-position: center;
      }
    }
    .title {
      & {
        font-size: 45px;
      }

      span {
        color: $color1;
      }
    }
    .bnt-container {
      & {
        margin-top: 20px;
      }
      .btn {
        margin-right: 10px;
        height: 40px;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .container-centered {
    & {
      height: 80%;
    }

    .title-area {
      .img-container {
        .img {
          width: 150px;
          height: 150px;
        }
      }
      .title {
        margin-top: 20px;
        font-size: 7.5vw;
      }
    }
  }
}

/* Smartphones - */
</style>
