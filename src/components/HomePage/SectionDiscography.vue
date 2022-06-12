<template>
  <section id="discography">
    <h1>DISCOGRAPHY</h1>
    <p>Single album/album<br>2020-2022</p>
    <div id="albums">
      <div v-for="item in albumList" :key="item.id" :class="{ new: item.isNew }">
        <img v-if="item.image" :src="item.image" alt="noImg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionDiscography',
  data() {
    return {
      albumList: [
        { id: 1, name: 'Trinity Force', image: require('@/assets/albums/1.jpg') },
        { id: 2, name: 'Swampgator', image: require('@/assets/albums/2.jpg') },
        { id: 3, name: 'Let Me Hear', image: require('@/assets/albums/3.jpg') },
        { id: 4, name: 'Haetae', image: require('@/assets/albums/4.jpg'), isNew: true },
        { id: 5, name: 'Falling Down feat. Renko  × TRI△NGLE' },
        { id: 6, name: 'Count' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#discography {
  position: relative;
  height: 1000px;
  background: @theme-color;

  h1 {
    position: absolute;
    top: 288px;
    width: 100%;
    margin: 0;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 108px;
    text-align: center;
    text-transform: uppercase;
    color: @white;
  }

  p {
    position: absolute;
    top: 456px;
    width: 100%;
    margin: 0;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: @white;
  }

  #albums {
    @width: 216px;

    position: absolute;
    top: 614px;
    width: 100%;
    height: @width;

    div {
      width: @width;
      height: @width;
      display: inline-block;

      img {
        width: @width;
        height: @width;
        object-fit: cover;
      }
    }
  }
}
</style>
