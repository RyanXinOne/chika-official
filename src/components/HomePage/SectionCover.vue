<template>
  <section class="cover">
    <div class="mask-cover-img">
      <div></div>
    </div>
    <span class="description">Music producer/mixing engineer/composer<br>take your song to the next level.</span>
    <span class="big-logo">FU<span>U</span></span>
    <SocialIcons left="182px" bottom="77px" />
  </section>
</template>

<script>
import SocialIcons from './widgets/SocialIcons.vue';

export default {
  name: 'SectionCover',
  components: {
    SocialIcons
  }
}
</script>

<style lang="less" scoped>
.cover {
  position: relative;
  height: 1000px;
  background: @theme-color;
  overflow: hidden;

  .mask-cover-img {
    @width: 1000px;
    @height: 1000px;

    position: absolute;
    top: 0px;
    right: 0px;
    width: @width;
    height: @height;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40.3%), url(@/assets/images/about-cover.jpg);
    background-size: @width @height;
    background-repeat: no-repeat;

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
        right: -(@width - 416px + tan(@angle) * (@height / 2));
        width: 100%;
        height: 100%;
        transform: skew(-@angle);
        background: @theme-color;
      }
    }
  }

  .description {
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

  .big-logo {
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
    user-select: none;

    span {
      position: relative;
      left: -69px;
    }
  }
}
</style>
