<template>
  <a class="float-logo" href="#">FU<span>U</span></a>
  <div class="nav-btn">
    <div v-for="i in 3" :key="i"></div>
  </div>
  <div class="nav-menu">
    <a href="#">Top</a>
    <a href="#discography" class="active">DISCOGRAPHY</a>
    <a href="#about">ABOUT</a>
    <a href="#shop">SHOP</a>
    <a href="#work">WORK</a>
  </div>
</template>

<script>
export default {
  name: 'FloatingNavigator',
}
</script>

<style lang="less" scoped>
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
  color: @black;
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
    background: @black-2;
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
    color: fade(@black, 35%);
    text-decoration: none;

    &.active {
      color: @black;
    }
  }
}
</style>
