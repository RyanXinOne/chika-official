<template>
  <footer>
    <a class="foot-logo" href="#">FU<span>U</span></a>
    <div class="links">
      <div class="column">
        <a href="#discography">DISCOGRAPHY</a>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
      </div>
      <div class="column">
        <a href="#shop">SHOP</a>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
        <a href="">Link 4</a>
        <a href="">Link 5</a>
      </div>
      <div class="column">
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
      </div>
    </div>
    <SocialIcons top="115px" right="100px" />
    <span class="credit">take your song to the next level.</span>
    <span class="copyright">@2022 FUU MUSIC</span>
  </footer>
</template>

<script>
import SocialIcons from './widgets/SocialIcons.vue';

export default {
  name: 'BottomFooter',
  components: {
    SocialIcons
  }
}
</script>

<style lang="less" scoped>
footer {
  position: relative;
  height: 526px;
  background: @theme-color;
  overflow: hidden;

  .foot-logo {
    position: absolute;
    left: 100px;
    top: 86px;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 900;
    font-size: 59.47px;
    line-height: 80.28px;
    letter-spacing: -7.43px;
    text-transform: uppercase;
    text-decoration: none;
    color: @black-2;
    user-select: none;

    span {
      position: relative;
      left: -17.1px;
    }
  }

  .links {
    position: absolute;
    left: 343px;
    top: 106.64px;

    display: flex;
    gap: 96px;

    .column {
      display: flex;
      flex-direction: column;
      gap: 18px;

      a {
        font-family: @font-SGMVB;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 19px;
        letter-spacing: 1.15px;
        color: @black;
        text-decoration: none;
      }
    }
  }

  .credit {
    position: absolute;
    left: 100px;
    bottom: 62px;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: @black-2;
  }

  .copyright {
    position: absolute;
    right: 100px;
    bottom: 62px;

    font-family: @font-SGMVB;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1.15px;
    color: @black;
  }
}
</style>
