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
    <section id="about">
      <div id="mask-cover">
        <div></div>
      </div>
      <span id="description">Music producer/mixing engineer/composer<br>take your song to the next lever.</span>
      <span id="big-logo">FU<span>U</span></span>
      <div id="social-icons">
        <img src="../assets/instagram.svg" />
        <img src="../assets/twitter.svg" />
        <img src="../assets/youtube.svg" />
        <img src="../assets/wechat.svg" />
        <img src="../assets/bilibili.svg" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less" scoped>
@import 'https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900,1&display=swap';
@import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';

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

      position: absolute;
      left: calc(50% - @width / 2);
      top: calc(50% - @height / 2 + 17.5px);
      width: @width;
      height: @height;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 36px;

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

  #about {
    position: relative;
    height: 1000px;
    background: @theme-color;

    #mask-cover {
      @width: 856px;
      @height: 1000px;

      position: absolute;
      top: 0px;
      right: 0px;
      width: @width;
      height: @height;
      overflow-x: hidden;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40.3%), url(../assets/cover.png);
      background-size: @width @height;

      &::before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(circle at center, @black-2 1.2px, rgba(0, 0, 0, 0) 1.2px);
        background-size: 7px 7px;
      }

      div {
        @angle: 30deg;

        &::before {
          content: '';
          position: absolute;
          top: 0px;
          right: 204px + tan(@angle) * (@height / 2);
          width: 100%;
          height: 100%;
          transform: skew(-@angle);
          background: @theme-color;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0px;
          right: -(435px + tan(@angle) * (@height / 2));
          width: 100%;
          height: 100%;
          transform: skew(-@angle);
          background: @theme-color;
        }
      }
    }

    #description {
      position: absolute;
      left: 182px;
      top: 236px;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: @black-2;
    }

    #big-logo {
      position: absolute;
      left: 168px;
      top: 274px;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 900;
      font-size: 240px;
      line-height: 324px;
      letter-spacing: -30px;
      text-transform: uppercase;
      color: @black-2;

      span {
        position: relative;
        left: -69px;
      }
    }

    #social-icons {
      @height: 37.79px;

      position: absolute;
      left: 182px;
      bottom: 77px;
      width: 297px;
      height: @height;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 22.67px;

      img {
        height: @height;
      }
    }
  }
}
</style>
