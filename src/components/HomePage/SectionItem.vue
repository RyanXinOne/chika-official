<template>
  <section class="item-content">
    <div class="content-panel">
      <img :src="itemData.image" :alt="itemData.name" />
      <h1 class="name">{{ itemData.name }}</h1>
      <span class="price">{{ itemData.price }}</span>
      <a class="purchase-btn" :href="itemData.link" target="_blank">PURCHASE NOW</a>
      <span class="demo-track">DEMO TRACK</span>
      <audio controls preload="metadata" :src="itemData.demo"></audio>
      <p class="description" v-for="(row, index) in itemData.descriptions" :key="index">{{ row }}</p>
    </div>
    <div class="close-panel" @click="$emit('closeSection')">
      <div class="close-btn"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionItem',
  props: {
    itemData: {
      type: Object,
      default() {
        return { image: '', name: '', price: '', link: '', demo: '', descriptions: [] };
      }
    }
  },
  emits: { closeSection: null },
}
</script>

<style lang="less" scoped>
.item-content {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @width-close-panel: 175px;

  .content-panel {
    display: inline-block;
    width: calc(100% - @width-close-panel);
    height: 100%;
    padding: 218px 318px 146px 146px;
    box-sizing: border-box;
    background: fade(@theme-color, 95%);
    overflow: auto;

    @padding: 21px;
    @width: 4px;

    &::-webkit-scrollbar {
      width: @padding * 2 + @width;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to left, transparent @padding, white @padding, white @padding + @width, transparent @padding + @width);
      border-radius: 100%;
    }

    &::-webkit-scrollbar-button {
      height: 68px;
    }

    img {
      width: 438px;
      height: 438px;
      object-fit: cover;
    }

    .name {
      margin: 53px 0 0 0;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 46px;
      text-transform: uppercase;
      color: @white;
    }

    .price {
      display: block;
      margin-top: 20px;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
      text-transform: uppercase;
      color: @white;
    }

    .purchase-btn {
      display: block;
      margin-top: 20px;
      width: 535px;
      height: 85px;
      background: #E6E6E6;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 85px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      color: #5A5A5A;
      cursor: pointer;
    }

    .demo-track {
      display: block;
      margin-top: 77px;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 26px;
      text-transform: uppercase;
      color: @white;
    }

    audio {
      display: block;
      margin: 20px 0 77px 0;
      width: 540px;
      height: 57px;
      border-radius: 50px;
    }

    .description {
      margin: 0;
      min-height: 26px;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 26px;
      text-transform: uppercase;
      color: @white;
    }
  }

  .close-panel {
    position: relative;
    display: inline-block;
    width: @width-close-panel;
    height: 100%;
    background: fade(#1B1B1B, 50%);

    @keyframes fade-in {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    animation: fade-in 0.3s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 0.5s;

    .close-btn {
      @size: 124px;
      @x-length: 49px * sqrt(2);
      @thickness: 5px;

      position: absolute;
      top: 26px;
      right: 25px;
      width: @size;
      height: @size;
      border: @thickness solid @theme-color;
      box-sizing: border-box;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        top: ((@size - 2 * @thickness - @thickness) / 2);
        left: ((@size - 2 * @thickness - @x-length) / 2);
        width: @x-length;
        height: @thickness;

        background: @theme-color;
        transform: rotate(45deg);
      }

      &::after {
        content: '';
        position: absolute;
        top: ((@size - 2 * @thickness - @thickness) / 2);
        left: ((@size - 2 * @thickness - @x-length) / 2);
        width: @x-length;
        height: @thickness;

        background: @theme-color;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
