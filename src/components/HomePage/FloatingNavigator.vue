<template>
  <transition name="floating-nav">
    <div class="floating-nav" v-show="!isHidden">
      <a class="float-logo" href="#">FU<span>U</span></a>
      <div class="nav-btn">
        <div v-for="i in 3" :key="i"></div>
      </div>
      <div class="nav-menu">
        <a href="#" :class="{ active: activeSection === 'header' || activeSection === 'cover' }">Top</a>
        <a href="#about" :class="{ active: activeSection === 'about' }">ABOUT</a>
        <a href="#discography" :class="{ active: activeSection === 'discography' }">DISCOGRAPHY</a>
        <a href="#shop" :class="{ active: activeSection === 'shop' }">SHOP</a>
        <a href="#work" :class="{ active: activeSection === 'work' }">WORK</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FloatingNavigator',
  data() {
    return {
      activeSection: undefined
    }
  },
  computed: {
    isHidden() {
      return this.activeSection === undefined || this.activeSection === 'header' || this.activeSection === 'footer';
    }
  },
  mounted() {
    // initialise the active section
    this.updateActiveSection();
    // listen to scroll event to toggle display
    window.addEventListener('scroll', this.updateActiveSection);
  },
  methods: {
    updateActiveSection() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const bufferHeight = clientHeight / 3;

      const coverTop = document.querySelector('.cover').offsetTop;
      // const aboutTop = document.querySelector('#about').offsetTop;
      const discographyTop = document.querySelector('#discography').offsetTop;
      const shopTop = document.querySelector('#shop').offsetTop;
      const footerTop = document.querySelector('footer').offsetTop;

      if (footerTop - scrollTop <= bufferHeight || Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        this.activeSection = 'footer';
      } else if (shopTop - scrollTop <= bufferHeight) {
        this.activeSection = 'shop';
      } else if (discographyTop - scrollTop <= bufferHeight) {
        this.activeSection = 'discography';
        // } else if (aboutTop - scrollTop <= bufferHeight) {
        //   this.activeSection = 'about';
      } else if (coverTop - scrollTop <= 0) {
        this.activeSection = 'cover';
      } else {
        this.activeSection = 'header';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.floating-nav {
  position: absolute;

  mix-blend-mode: difference;
  @mix-base-color: #A3FCFF;

  .float-logo {
    position: fixed;
    left: 51px;
    top: 56px;

    display: block;
    width: 40px;
    height: 63px;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 900;
    font-size: 26.1818px;
    line-height: 35px;
    letter-spacing: 4.90909px;
    text-transform: uppercase;
    color: @mix-base-color;
    user-select: none;
    text-decoration: none;

    span {
      position: absolute;
      left: 0;
      top: 28px;
    }
  }

  .nav-btn {
    position: fixed;
    right: 58px;
    top: 70px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

    div {
      width: 50px;
      height: 5px;
      background: @mix-base-color;
    }
  }

  .nav-menu {
    position: fixed;
    left: 50px;
    bottom: 36px;

    display: flex;
    flex-direction: column;
    gap: 2px;

    a {
      font-family: @font-SGMVB;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1.15px;
      text-decoration: none;
      color: fade(@mix-base-color, 35%);
      transition: color 0.25s ease;

      &.active {
        color: @mix-base-color;
      }
    }
  }
}

.floating-nav-enter-from,
.floating-nav-leave-to {
  opacity: 0;
}

.floating-nav-enter-active {
  transition: opacity 0.2s ease-in;
}

.floating-nav-leave-active {
  transition: opacity 0.1s ease-out;
}
</style>
