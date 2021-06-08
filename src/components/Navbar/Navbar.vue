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
      <Nav class="nav no-mobile" />
      <div class="mobile-only show-menu">
        <SourceCodeIcon
          @mouseover="showMenuBtn.hover = true"
          @mouseleave="showMenuBtn.hover = showMenuBtn.toLeave"
          @click="showMenu"
          :show="showMenuBtn.hover"
          :style="
            showMenuBtn.hover ? 'transform:scale(1.4)' : 'transform:scale(1.2)'
          "
          id="MobileShowMenuButton"
        />
      </div>
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
import SourceCodeIcon from "./components/SourceCodeIcon.vue";

export default {
  name: "Navbar",
  components: { Nav, SourceCodeIcon },
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
  box-shadow: 0 0 0 1.4px $colorFonts;
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

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) and (max-width: 600px) {
    .no-mobile {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .show {
      display: flex;
    }

    .hide {
      display: none;
    }

    .menu-mobile {
      background: $colorNavbar;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 70px;
      right: 0;
      z-index: 999;
      padding: 50px 0;
      overflow-y: auto;
    }
    .movile-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      overflow-y: auto;
    }

    .active-link {
      background: $color1;
    }
    .nav-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      margin-right: 0;
      margin-top: 30px;
      font-size: 20px;
      border-bottom: 1px solid $color1;
      border-top: 1px solid $color1;

      &:hover {
        background: $color1;
        color: $colorFonts;
      }

      &:last-child {
        position: fixed;
        bottom: 10px;
        gap: 20px;
        border-bottom: none;
        border-top: none;
      }
    }
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape),
    only screen and (min-device-pixel-ratio: 1.5) and (max-width: 600px) and (orientation: landscape) {
    .menu-mobile {
      min-height: 100%;
      height: fit-content;
    }

    .nav-item {
      &:last-child {
        position: relative;
      }
    }

    .movile-nav {
      height: fit-content;
    }
  }
}
</style>
