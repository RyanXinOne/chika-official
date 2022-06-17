<template>
  <section id="discography">
    <h1>DISCOGRAPHY</h1>
    <p>Single album/album<br>2020-2022</p>
    <div id="albums" :style="{ transform: translateX }" @mouseover="pauseAnime" @mouseout="resumeAnime">
      <div class="albumgroup" v-for="n in albumGroups" :key="n">
        <div v-for="item in albumList" :key="item.id" :title="item.name" :class="{ new: item.isNew }">
          <img :src="item.image" :alt="item.name" />
        </div>
      </div>
    </div>
  </section>
  <SectionAlbum :album="albumList[3]" />
</template>

<script>
import SectionAlbum from './SectionAlbum.vue';

export default {
  name: 'SectionDiscography',
  components: {
    SectionAlbum
  },
  data() {
    return {
      albumList: [
        { id: 1, name: 'CHIKAKA', date: '2022.6', image: require('@/assets/albums/1.jpg'), isNew: true },
        { id: 2, name: 'DINNNNN', date: '2022.9', image: require('@/assets/albums/2.jpg') },
        { id: 3, name: 'S-Ky', date: '2022.1', image: require('@/assets/albums/3.jpg') },
        {
          id: 4,
          name: 'ALBUM CHIKAKA FEAT. SAWANO',
          date: '2022.12.22',
          image: require('@/assets/albums/4.jpg'),
          sources: { "Wangyiyun": "https://music.163.com/", "AppleMusic": "https://www.apple.com/apple-music/" },
          songs: [
            {id: 1, name: 'Trinity Force', link: require('@/assets/audios/cheat.mp3')},
            {id: 2, name: 'Swampgator', link: require('@/assets/audios/cheat.mp3')},
            {id: 3, name: 'Let Me Hear', link: require('@/assets/audios/cheat.mp3')},
            {id: 4, name: 'Haetae', link: require('@/assets/audios/cheat.mp3')},
            {id: 5, name: 'Falling Down feat. Renko  × TRI△NGLE', link: require('@/assets/audios/cheat.mp3')},
            {id: 6, name: 'Count', link: require('@/assets/audios/cheat.mp3')},
          ]
        },
        { id: 5, name: 'Gimme', date: '2022.9', image: require('@/assets/albums/5.jpg') },
      ],
      transX: 0,
      clientWidth: document.documentElement.clientWidth || document.body.clientWidth,
      scrolling: true
    }
  },
  computed: {
    albumGroupWidth() {
      // compute width of a single album group
      return this.albumList.length * 216;
    },
    albumGroups() {
      // compute number of album groups required
      return Math.ceil(this.clientWidth / this.albumGroupWidth) * 2;
    },
    translateX() {
      // compute translateX effect of CSS transform
      return 'translateX(-' + this.transX + 'px)';
    }
  },
  methods: {
    albumsInfiniteScrollAnime() {
      if (this.scrolling) {
        this.transX++;
        if (this.transX >= this.albumGroupWidth * (this.albumGroups / 2)) {
          this.transX = 0;
        }
      }
      window.requestAnimationFrame(this.albumsInfiniteScrollAnime);
    },
    pauseAnime() {
      this.scrolling = false;
    },
    resumeAnime() {
      this.scrolling = true;
    }
  },
  mounted() {
    // start infinite scroll animation
    this.albumsInfiniteScrollAnime();

    // listen for window resize
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    });
  }
}
</script>

<style lang="less" scoped>
section#discography {
  position: relative;
  height: 1000px;
  background: @theme-color;
  overflow-x: hidden;

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
    white-space: nowrap;

    .albumgroup {
      display: inline-block;
      height: @width;

      div {
        position: relative;
        display: inline-block;
        width: @width;
        height: @width;
        cursor: pointer;

        img {
          width: @width;
          height: @width;
          object-fit: cover;
        }

        &.new::after {
          content: 'NEW';
          position: absolute;
          top: 10px;
          left: 10px;
          width: 59px;
          padding: 5px 10px;
          background: @yellow;

          font-family: @theme-font;
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: @blue;
        }
      }
    }
  }
}
</style>
