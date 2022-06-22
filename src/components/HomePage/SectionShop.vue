<template>
  <section id="shop">
    <h1 class="section-title">
      <div></div><span>SHOP</span>
    </h1>
    <p class="section-subtitle">SAMPLE PACK BUNDLES & COLLECTIONS | SOUND DESIGN & ACCESSORIES</p>
    <div class="items-container">
      <div class="items">
        <div class="item" v-for="item in loadItems" :key="item.id">
          <img :src="item.image" :alt="item.name" />
        </div>
      </div>
    </div>
    <div class="view-more-btn"><span>VIEW MORE</span></div>
  </section>
</template>

<script>
export default {
  name: 'SectionShop',
  data() {
    return {
      items: [
        { id: 1, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 1', price: 0 },
        { id: 2, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 2', price: 0 },
        { id: 3, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 3', price: 0 },
        { id: 4, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 4', price: 0 },
        { id: 5, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 5', price: 0 },
        { id: 6, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 6', price: 0 },
        { id: 7, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 7', price: 0 },
        { id: 8, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 8', price: 0 },
        { id: 9, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 9', price: 0 },
        { id: 10, image: require('@/assets/images/shop-mock-item.png'), name: 'Item 10', price: 0 },
      ],
      displayNum: 8
    }
  },
  computed: {
    loadItems() {
      return this.items.slice(0, this.displayNum);
    }
  }
}
</script>

<style lang="less" scoped>
#shop {
  position: relative;
  padding: 170px 0 238px 0;
  background: @black-2;
  overflow: hidden;

  &::before {
    @bg-image-width: 1254px;

    content: '';
    position: absolute;
    top: 185px;
    width: 100%;
    height: @bg-image-width;
    background: url('@/assets/images/shop-bg.png') right no-repeat;
    background-size: @bg-image-width @bg-image-width;
    opacity: 0.1;
  }

  * {
    position: relative;
    z-index: 0;
  }

  p.section-subtitle {
    color: @theme-color;
  }

  .items-container {
    margin-top: 102px;
    padding: 0 128px;
    text-align: center;

    .items {
      @width: 299px;
      @gap: 20px;
      @max-columns: 4;

      width: 100%;
      max-width: @width * @max-columns + @gap * (@max-columns - 1);

      display: inline-grid;
      grid-template-columns: repeat(auto-fill, @width);
      grid-template-rows: repeat(auto-fill, @width);
      gap: @gap;
      justify-content: center;

      .item {
        width: @width;
        height: @width;
        cursor: pointer;

        img {
          width: @width;
          height: @width;
          object-fit: cover;
        }
      }
    }
  }

  .view-more-btn {
    margin-top: 102px;
    text-align: center;

    span {
      cursor: pointer;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 4px;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: @white;
    }
  }
}
</style>
