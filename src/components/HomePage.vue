<template>
  <div id="body">
    <header>
      <div id="mini-logo">
        <span>FUU</span>
        <div></div>
        <span>MUSIC</span>
      </div>
      <div id="nav-menu">
        <span>ABOUT</span>
        <span>DISCOGRAPHY</span>
        <span>SHOP</span>
        <span>WORK</span>
      </div>
      <div id="lang-btn">
        <span>EN</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less" scoped>
@base-font: Helvetica, Arial, sans-serif;
@theme-font: 'Satoshi', @base-font;
@theme-color: #68DFE3;
@black: #000000;
@black-2: #2B2B2B;

#body {
  header {
    position: relative;
    height: 106px;
    background: @theme-color;

    #mini-logo {
      position: absolute;
      width: 65px;
      height: 55px;
      left: 73px;
      top: 45px;
      text-align: center;

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

    #nav-menu {
      @width: 361px;
      @height: 19px;

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 36px;
      width: @width;
      height: @height;
      position: absolute;
      left: calc(50% - @width / 2);
      top: calc(50% - @height / 2 + 17.5px);

      span {
        font-family: @theme-font;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: @height;
        letter-spacing: 1.15px;
        text-transform: uppercase;
        color: @black;
      }
    }

    #lang-btn {
      @radius: 21.5px;

      position: absolute;
      right: 52px;
      top: 46px;
      width: @radius * 2;
      height: @radius * 2;
      border-radius: @radius;
      background: @black-2;
      text-align: center;

      span {
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
  }
}
</style>
