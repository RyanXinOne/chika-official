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
          <div class="item-hover">
            <img src="@/assets/svgs/arrow.svg" />
            <div class="border-inner"></div>
            <div class="border-middle"></div>
          </div>
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
    top: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/shop-bg.png') center right no-repeat;
    background-size: @bg-image-width @bg-image-width;
    background-attachment: fixed;
    opacity: 0.1;
  }

  * {
    position: relative;
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
        position: relative;
        width: @width;
        height: @width;
        cursor: pointer;

        img {
          width: @width;
          height: @width;
          object-fit: cover;
        }

        .item-hover {
          @anime-time: 0.3s;

          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background: @theme-color;
          mix-blend-mode: lighten;

          opacity: 0;
          transition: opacity @anime-time ease-in;

          img {
            position: absolute;
            left: 13.5px;
            bottom: 13.5px;
            width: 63.61px;
            height: 63.61px;
            transform: rotate(-45deg);

            opacity: 0;
          }

          .border-inner {
            @margin: 10.5px;

            position: absolute;
            left: @margin;
            top: @margin;
            width: @width - @margin * 2;
            height: @width - @margin * 2;
            box-sizing: border-box;
            border: 2px solid @white;

            opacity: 0;
            transition: opacity @anime-time ease-in;
          }

          .border-middle {
            @margin: 4.5px;

            position: absolute;
            left: @margin;
            top: @margin;
            width: @width - @margin * 2;
            height: @width - @margin * 2;
            box-sizing: border-box;
            border: 3px solid @white;

            opacity: 0;
            transition: opacity @anime-time ease-in;
          }

          &:hover {
            opacity: 1;
            transition: opacity @anime-time ease-out;

            img {
              @keyframes breathe {
                0% {
                  opacity: 0;
                }

                50% {
                  opacity: 1;
                }

                100% {
                  opacity: 0;
                }
              }

              animation: breathe 1.2s ease-in-out infinite;
            }

            .border-middle {
              opacity: 0.3;
              transition: opacity @anime-time * 2 ease-out;
            }

            .border-inner {
              opacity: 0.5;
              transition: opacity @anime-time * 3 ease-out;
            }
          }
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
