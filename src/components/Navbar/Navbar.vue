<template>
  <header
    :class="actualRoute !== '/' ? 'border-bottom background' : 'no-background'"
  >
    <div class="container">
      <div class="header-title">
        <router-link to="/" class="title" @click="openMenu = false">
          <div class="brackets">&lt;</div>
          <div id="HeaderTitleI">Isaac Martinez</div>
          <div class="brackets">/&gt;</div>
        </router-link>
      </div>
      <div class="slide_container mobile-only">
        <Slider/>
      </div>
      <Nav class="nav no-mobile" />
    
      <div
        class="menu-mobile mobile-only"
        id="MenuMobile"
        :class="openMenu ? 'show' : 'hide'"
      >
        <Nav class="movile-nav movile-only" @click="openMenu = false" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import gsap from "gsap";
import Nav from "./components/Nav.vue";
// import SourceCodeIcon from "./components/SourceCodeIcon.vue";
import Slider from './components/Slider';

export default {
  name: "Navbar",
  components: { Nav, Slider},
  data: function() {
    return {
      openMenu: false,
      showMenuBtn: { hover: false, toLeave: false },
      activeRoute: { route: null },
      actualRoute: null,
    };
  },
  methods: {
    showMenu: function() {
      this.openMenu = !this.openMenu;
    },
  },
  watch: {
    $route(to) {
      this.actualRoute = to.path;
      this.openMenu = false;
    },
    openMenu() {
      if (this.openMenu)
        gsap.from(".nav-item", {
          delay: 0.1,
          opacity: 0,
        });
      this.showMenuBtn.hover = this.openMenu;
      this.showMenuBtn.toLeave = this.openMenu;
      console.log("Open");
      document.body.style.overflow = this.openMenu ? "hidden" : "auto";
      document.getElementById("view").classList.toggle("no-scroll");
    },
  },
  mounted: function() {
    gsap.from(".nav-item", {
      duration: 1.3,
      opacity: 0,
      x: 40,
    });
    gsap.from(".brackets", {
      duration: 0.3,
      delay: 0.5,
      opacity: 0,
      y: -40,
      ease: "bounce",
    });
    gsap.from("#HeaderTitleI", {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "bounce",
    });
    gsap.from("#MobileShowMenuButton", {
      duration: 1,
      opacity: 0,
      x: -60,
      ease: "bounce",
    });
  },
};
</script>

<style lang="scss">
@import "../../assets/variables.scss";
header.background {
  background: $colorDominant;
}

.border-bottom {
  box-shadow: 0 0 0 1.4px $colorBottomNav;
}
header {
  & {
    align-items: center;

    display: flex;
    height: 70px;
    position: fixed;
    width: 100vw;
    z-index: 99;
  }

  .mobile-only {
    display: none;
  }

  a {
    & {
      color: $colorFonts;
      text-decoration: none;
    }

    &:hover {
      color: $color1;
      transform: scale(1.1);
    }
  }

  .active-link {
    box-shadow: 0 4px 2px -2px $color1;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
  }

  .title {
    font-size: 25px;
    display: flex;
    #HeaderTitleI {
      margin: 0 5px;
    }
    .brackets {
      color: $color1;
    }

    &:hover {
      .brackets {
        color: $colorFonts;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 28px;
    cursor: pointer;
    /* Hide default HTML checkbox */

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: $color1;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      $translations: 38px;
      -webkit-transform: translateX($translations);
      -ms-transform: translateX($translations);
      transform: translateX($translations);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
      z-index: 5;
    }

    .actual_mode {
      position: absolute;
      z-index: 3;
      font-size: 13px;
      top: 7px;
      right: 7px;
      color: $colorFonts;
      font-weight: bold;
      -webkit-transition: 0.4s;
      transaction: 0.4s;
    }
    input:checked + .slider + .actual_mode {
      $translations: -21px;
      -webkit-transform: translateX($translations);
      -ms-transform: translateX($translations);
      transform: translateX($translations);
    }
  }

  .nav-item {
    & {
      margin-right: 25px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .show-menu {
    cursor: pointer;
  }

  /* Smartphones ----------- */
  @media screen and (max-width: 665px) {
    .no-mobile {
      display: none !important;
    }

    .mobile-only {
      display: block;
    }

    .menu-mobile {
      background: $colorNavbar;
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 999;
      border-top: 1px solid $colorBottomNav;
    }

    .movile-nav{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
