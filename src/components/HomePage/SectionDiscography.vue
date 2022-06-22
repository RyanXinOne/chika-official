<template>
  <section id="discography">
    <h1 class="section-title">
      <div></div><span>DISCOGRAPHY</span>
    </h1>
    <p class="section-subtitle"><span>New album SPARK</span> released on Sep. 6</p>
    <div class="albums" :style="{ transform: translateX }" @mouseover="pauseAnime" @mouseout="resumeAnime">
      <div class="albumgroup" v-for="n in albumGroups" :key="n">
        <div class="album" v-for="album in albumList" :key="album.id" :class="{ new: album.isNew }">
          <img :src="album.image" :alt="album.name" />
          <div class="albumhover">
            <span>{{ album.name }}</span>
            <span>{{ dashedJoinDate(album.date) }}</span>
          </div>
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
        { id: 1, name: 'CHIKAKA', date: new Date('2022-06-01'), image: require('@/assets/albums/1.jpg'), isNew: true },
        { id: 2, name: 'DINNNNN', date: new Date('2022-09-01'), image: require('@/assets/albums/2.jpg') },
        { id: 3, name: 'S-Ky', date: new Date('2022-01-01'), image: require('@/assets/albums/3.jpg') },
        {
          id: 4,
          name: 'ALBUM CHIKAKA FEAT. SAWANO',
          date: new Date('2022-12-22'),
          image: require('@/assets/albums/4.jpg'),
          sources: { "Wangyiyun": "https://music.163.com/", "AppleMusic": "https://www.apple.com/apple-music/" },
          songs: [
            { id: 1, name: 'Trinity Force', link: require('@/assets/audios/cheat1.mp3') },
            { id: 2, name: 'Swampgator', link: require('@/assets/audios/cheat2.mp3') },
            { id: 3, name: 'Let Me Hear', link: require('@/assets/audios/cheat3.mp3') },
            { id: 4, name: 'Haetae', link: require('@/assets/audios/cheat4.mp3') },
            { id: 5, name: 'Falling Down feat. Renko  × TRI△NGLE', link: require('@/assets/audios/cheat5.mp3') },
            { id: 6, name: 'Count', link: require('@/assets/audios/cheat6.mp3') },
          ]
        },
        { id: 5, name: 'Gimme', date: new Date('2022-09-03'), image: require('@/assets/albums/5.jpg') },
      ],
      scrollSpeed: 1,
      isScrolling: true,
      transX: 0,
      clientWidth: document.documentElement.clientWidth || document.body.clientWidth
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
  created() {
    // listen for window resize
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    });
  },
  mounted() {
    // start infinite scroll animation
    window.requestAnimationFrame(this.albumsInfiniteScrollAnime);
  },
  methods: {
    albumsInfiniteScrollAnime(timestamp) {
      if (this.lastTimeStamp !== undefined && this.isScrolling) {
        // calculate timegap to achieve uniform speed
        const timegap = timestamp - this.lastTimeStamp;
        this.transX += 0.06 * this.scrollSpeed * timegap;
        // recover position to repeat
        const regressionWidth = this.albumGroupWidth * (this.albumGroups / 2);
        this.transX %= regressionWidth;
      }
      this.lastTimeStamp = timestamp;
      window.requestAnimationFrame(this.albumsInfiniteScrollAnime);
    },
    pauseAnime() {
      this.isScrolling = false;
    },
    resumeAnime() {
      this.isScrolling = true;
    },
    dashedJoinDate(date) {
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  }
}
</script>

<style lang="less" scoped>
#discography {
  position: relative;
  padding: 252px 0 170px 0;
  background: @theme-color;
  overflow: hidden;

  p.section-subtitle {
    span {
      text-decoration-line: underline;
      color: @yellow;
      cursor: pointer;
    }
  }

  .albums {
    @width: 216px;

    margin-top: 190px;
    width: 100%;
    height: @width;
    white-space: nowrap;

    .albumgroup {
      display: inline-block;
      height: @width;

      .album {
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

        &.new::before {
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

        .albumhover {
          opacity: 0;
          transition: opacity 0.3s ease-in;

          &:hover {
            opacity: 1;
            transition: opacity 0.3s ease-out;
          }

          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          line-height: @width;
          background: rgba(0, 0, 0, 0.6);

          span:first-child {
            display: inline-block;
            width: 100%;
            text-align: center;
            vertical-align: middle;
            white-space: normal;

            font-family: @theme-font;
            font-style: normal;
            font-weight: 900;
            font-size: 19px;
            line-height: 26px;
            text-transform: uppercase;
            color: @theme-color;
          }

          span:last-child {
            position: absolute;
            top: 176px;
            display: block;
            width: 100%;
            text-align: center;

            font-family: @theme-font;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: @theme-color;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
