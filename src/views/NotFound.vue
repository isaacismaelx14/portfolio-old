<template>
  <section class="Notfound-page use-bootstrap">
    <div class="container">
      <div class="row mt-5">
        <div class="col col-center"><PageOpenEyeIcon :width="300" /></div>
        <div class="col col-center add-mt">
          <span class="display-2 text-danger glitch">
            Error 404
          </span>
          <br />
          <span class="display-4 text-p">Page not found</span>
          <br />

          <router-link to="/" class="btn btn-danger">Go home</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageOpenEyeIcon from "../components/Icons/PageOpenEyeIcon.vue";
import gsap from "gsap";
export default {
  name: "NotFound",
  components: { PageOpenEyeIcon },
  mounted() {
    const tl = gsap.timeline({
      onComplete() {
        tl.play(0);
      }
    });

    tl.to(".NotFoundIcon-page", {
      x: 10,
      duration: 1
    });
    tl.to(".NotFoundIcon-page", {
      x: -10,
      duration: 1
    });
    tl.to(".NotFoundIcon-page", {
      x: 0,
      duration: 1
    });

    const tl2 = gsap.timeline({
      onComplete() {
        tl2.play(0);
      }
    });

    tl2.to(".NotFoundIcon-iris", {
      x: 95,
      duration: 1
    });

    tl2.to(".NotFoundIcon-iris", {
      x: 102,
      duration: 1
    });

    const tl3 = gsap.timeline({
      onComplete() {
        tl3.play(0);
      }
    });

    tl3.from(".NotFound-line", {
      opacity: 0,
      y: 10,
      duration: 2
    });

    tl3.to(".NotFound-line", {
      opacity: 0,
      y: -10,
      duration: 2,
      delay: 1
    });

    const tl4 = gsap.timeline({
      onComplete() {
        tl4.play(0);
      }
    });
    tl4.set(".glitch", {
      opacity: 1,
      y: 0
    });

    tl4.to(".glitch", {
      opacity: 0,
      y: 40,
      duration: 2,
      delay: 3
    });
    tl4.from(".glitch", {
      opacity: 0,
      y: -20,
      delay: 1,
      duration: 2
    });
  }
};
</script>

<style lang="scss">
.Notfound-page {
  padding-top: 70px;
}

.col-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-p{
  color: var(--colorFonts)
}
.glitch {
  font-size: 130px;
  line-height: 1;
  font-weight: bold;
  position: relative;
  margin: 0;
  text-decoration: none;
  color: #fff;
  &:before,
  &:after {
    display: block;
    content: "Error 404";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: rgba(255, 0, 0, 0.303);
    z-index: -2;
  }
  &:before {
    color: rgba(255, 72, 72, 0.316);
    z-index: -1;
  }

  &:before {
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  &:after {
    animation: glitch 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }
}
@keyframes glitch {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-5px, 5px);
    transform: translate(-5px, 5px);
  }
  40% {
    -webkit-transform: translate(-5px, -5px);
    transform: translate(-5px, -5px);
  }
  60% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  80% {
    -webkit-transform: translate(5px, -5px);
    transform: translate(5px, -5px);
  }
  to {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@media screen and (max-width: 576px) {
  .add-mt {
    margin-top: 40px !important;
  }
}
</style>
