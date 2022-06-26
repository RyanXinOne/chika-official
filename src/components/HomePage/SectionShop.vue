<template>
  <section id="shop">
    <h1 class="section-title">
      <div></div><span>SHOP</span>
    </h1>
    <p class="section-subtitle">SAMPLE PACK BUNDLES & COLLECTIONS | SOUND DESIGN & ACCESSORIES</p>
    <div class="items-container">
      <div class="items">
        <div class="item" v-for="(item, index) in loadItems" :key="index" @click="showItemContent(item)">
          <img :src="item.image" :alt="item.name" />
          <div class="item-hover">
            <img src="@/assets/svgs/arrow.svg" alt="arrow" />
            <div class="border-inner"></div>
            <div class="border-middle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="view-more-btn" v-if="canLoadMore" @click="displayMore"><span>VIEW MORE</span></div>
  </section>
  <transition name="item-content" @after-leave="eraseItemData">
    <SectionItem v-if="itemContentOn" :item-data="itemData" @close-section="closeItemContent" />
  </transition>
</template>

<script>
import SectionItem from './SectionItem.vue';

export default {
  name: 'SectionShop',
  components: {
    SectionItem
  },
  data() {
    return {
      items: [
        {
          image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.01', price: '$ 1.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: [
            'Volume 1 focuses on OB-Xd, a great VST synth that emulates the legendary Oberheim OB-X',
            '',
            'You can get it on discoDSP\'s website',
            '',
            'The pack contains:',
            '15 OB-Xd Patches, 15 Loops/Riffs, 15 Midi Files',
            '',
            '26 x claps & rimshots',
            '59 x kicks',
            '93 x loops',
            '60 x digital percussion; and',
            '73 x snares.']
        },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.02', price: '$ 2.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.02'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.03', price: '$ 3.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.03'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.04', price: '$ 4.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.04'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.05', price: '$ 5.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.05'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.06', price: '$ 6.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.06'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.07', price: '$ 7.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.07'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.08', price: '$ 8.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.08'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.09', price: '$ 9.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.09'] },
        { image: require('@/assets/images/shop-mock-item.png'), name: 'Anomalie Sounds Vol.10', price: '$ 10.00', link: 'https://www.taobao.com/', demo: require('@/assets/audios/cheat.mp3'), descriptions: ['This is Anomalie Sounds Vol.10'] },
      ],
      displayNum: 8,
      itemContentOn: false,
      itemData: undefined
    }
  },
  computed: {
    loadItems() {
      return this.items.slice(0, this.displayNum);
    },
    canLoadMore() {
      return this.displayNum < this.items.length;
    }
  },
  methods: {
    displayMore() {
      this.displayNum += 8;
    },
    showItemContent(item) {
      this.itemData = item;
      this.itemContentOn = true;
    },
    closeItemContent() {
      this.itemContentOn = false;
    },
    eraseItemData() {
      this.itemData = undefined;
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

    @supports (-webkit-touch-callout: none) {
      top: 185px;
      background-position: top right;
      background-attachment: scroll;
    }
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

        @keyframes fade-in {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        animation: fade-in 1s ease-out;
        animation-fill-mode: both;

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

.item-content-enter-from,
.item-content-leave-to {
  transform: translateX(-100%);
}

.item-content-enter-active {
  transition: transform 0.5s ease-out;
}

.item-content-leave-active {
  transition: transform 0.5s ease-in;
}
</style>
