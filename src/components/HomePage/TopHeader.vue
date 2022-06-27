<template>
  <header>
    <div class="nav-menu">
      <a href="#about">ABOUT</a>
      <a href="#discography">DISCOGRAPHY</a>
      <a href="#shop">SHOP</a>
      <a href="#work">WORK</a>
    </div>
    <a class="mini-logo" href="#">
      <span>FUU</span>
      <div></div>
      <span>MUSIC</span>
    </a>
    <div class="lang-btn">EN</div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="less" scoped>
header {
  position: relative;
  height: 106px;
  background: @theme-color;
  overflow: hidden;

  .nav-menu {
    position: absolute;
    top: 61px;
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 36px;

    a {
      font-family: @theme-font;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 1.15px;
      text-transform: uppercase;
      color: @black;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .mini-logo {
    position: absolute;
    display: block;
    width: 65px;
    height: 55px;
    left: 73px;
    top: 45px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    span:first-child {
      font-family: @theme-font;
      font-style: normal;
      font-weight: 900;
      font-size: 26.1818px;
      line-height: 35px;
      letter-spacing: 4.90909px;
      text-transform: uppercase;
      color: @black;
    }

    div {
      width: 63px;
      height: 2px;
      background: @black;
      margin: 1px;
    }

    span:last-child {
      font-family: 'Montserrat', @base-font;
      font-style: normal;
      font-weight: 600;
      font-size: 12.9044px;
      line-height: 16px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: @black;
    }
  }

  .lang-btn {
    @radius: 21.5px;

    position: absolute;
    right: 52px;
    top: 46px;
    width: @radius * 2;
    height: @radius * 2;
    border-radius: @radius;
    background: @black-2;
    text-align: center;
    user-select: none;
    cursor: pointer;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: @radius * 2;
    letter-spacing: 1.15px;
    text-transform: uppercase;
    color: @theme-color;
  }
}
</style>
