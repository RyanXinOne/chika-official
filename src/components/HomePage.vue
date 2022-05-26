<template>
  <div id="main">
    <header>
      <div id="mini-logo">
        <span>Music</span>
        <div></div>
        <span>FUU</span>
      </div>
      <div id="lang-btn">

      </div>
      <div id="nav-menu">
        <span>EN</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {}
}
</script>

<style lang="less" scoped>
#main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 1512px;
  height: 5427px;
  left: 0px;
  top: 0px;

  header {
    position: relative;
    width: 1512px;
    height: 106px;
    background: #68DFE3;
    flex: none;
    order: 0;
    flex-grow: 0;

    div,
    span {
      display: inline-block;
    }

    #mini-logo {
      span:first-child {
        position: absolute;
        width: 65px;
        height: 16px;
        left: 73px;
        top: 84px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12.9044px;
        line-height: 16px;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: #000000;
      }

      div {
        position: absolute;
        width: 63px;
        height: 0px;
        left: 74px;
        top: 82px;
        border: 1px solid #000000;
      }

      span:last-child {
        position: absolute;
        width: 65px;
        height: 35px;
        left: 73px;
        top: 45px;
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 900;
        font-size: 26.1818px;
        line-height: 35px;
        letter-spacing: 4.90909px;
        text-transform: uppercase;
        color: #000000;
      }
    }

    #nav-menu {
      background: #2B2B2B;
      width: 43px;
      height: 43px;
      border-radius: 22px;
      text-align: center;
      position: absolute;
      left: 1417px;
      top: 46px;

      span {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 43px;
        letter-spacing: 1.15px;
        color: #68DFE3;
      }
    }
  }
}
</style>
