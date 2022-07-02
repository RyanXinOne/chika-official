<template>
  <div class="social-icons" :style="{ left: left, right: right, top: top, bottom: bottom }">
    <a href="" target="_blank"><img src="@/assets/svgs/instagram.svg" alt="Instagram" /></a>
    <a href="" target="_blank"><img src="@/assets/svgs/twitter.svg" alt="Twitter" /></a>
    <a href="" target="_blank"><img src="@/assets/svgs/youtube.svg" alt="YouTube" /></a>
    <a href="" target="_blank"><img src="@/assets/svgs/wechat.svg" alt="WeChat" /></a>
    <a href="" target="_blank"><img src="@/assets/svgs/bilibili.svg" alt="Bilibili" /></a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: {
    left: {
      type: String,
      default() {
        return 'initial';
      }
    },
    right: {
      type: String,
      default() {
        return 'initial';
      }
    },
    top: {
      type: String,
      default() {
        return 'initial';
      }
    },
    bottom: {
      type: String,
      default() {
        return 'initial';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.social-icons {
  @height: 37.79px;

  position: absolute;
  height: @height;

  display: flex;
  align-items: center;
  gap: 22.67px;

  img {
    height: @height;
    user-select: none;
  }
}
</style>
