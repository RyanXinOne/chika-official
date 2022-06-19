<template>
  <section>
    <h1 class="section-title">
      <div></div><span>SHOP</span>
    </h1>
    <p class="section-subtitle">SAMPLE PACK BUNDLES & COLLECTIONS | SOUND DESIGN & ACCESSORIES</p>
    <div id="items">
      <div class="item" v-for="item in loadItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
      </div>
    </div>
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
      displayNum: 0
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
section {
  position: relative;
  height: 1439px;
  background: @black-2;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/shop-bg.png') bottom right no-repeat;
    background-size: 1254px 1254px;
    opacity: 0.1;
  }

  h1.section-title {
    top: 170px;
  }

  p.section-subtitle {
    top: 325px;
    color: @theme-color;
  }
}
</style>
