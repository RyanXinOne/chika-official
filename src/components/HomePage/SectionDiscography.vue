<template>
  <section id="discography">
    <h1 class="section-title">
      <div></div><span>DISCOGRAPHY</span>
    </h1>
    <p class="section-subtitle" v-if="firstNewAlbum"><a href="#albums" @click="showAlbumContent(firstNewAlbum)">New album {{ firstNewAlbum.name }}</a> released on {{ readableDate(firstNewAlbum.date) }}</p>
    <div class="albums" id="albums" :style="{ transform: translateX }" @mouseover="pauseAnime" @mouseout="resumeAnime">
      <div class="album-group" v-for="n in albumGroups" :key="n">
        <div class="album" v-for="(album, index) in albumList" :key="index" :class="{ new: album.isNew }" @click="showAlbumContent(album)">
          <img :src="album.image" :alt="album.name" />
          <div class="album-hover">
            <span>{{ album.name }}</span>
            <span>{{ dashedJoinDate(album.date) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <transition name="album-content" @after-leave="eraseAlbumData">
    <SectionAlbum v-show="albumContentOn" :album-data="albumData" @close-section="closeAlbumContent" />
  </transition>
</template>

<script>
import SectionAlbum from './SectionAlbum.vue';
const axios = require('axios').default;

export default {
  name: 'SectionDiscography',
  components: {
    SectionAlbum
  },
  data() {
    return {
      albumList: [],
      scrollSpeed: 1,
      isScrolling: true,
      transX: 0,
      clientWidth: document.documentElement.clientWidth || document.body.clientWidth,
      albumSize: NaN,
      albumContentOn: false,
      albumData: undefined
    }
  },
  computed: {
    albumGroupWidth() {
      // compute width of a single album group
      return this.albumList.length * this.albumSize || 0;
    },
    albumGroups() {
      // compute number of album groups required
      return this.albumGroupWidth > 0 ? Math.ceil(this.clientWidth / this.albumGroupWidth) * 2 : 0;
    },
    translateX() {
      // compute translateX effect of CSS transform
      return 'translateX(-' + this.transX + 'px)';
    },
    firstNewAlbum() {
      for (const album of this.albumList) {
        if (album.isNew) {
          return album;
        }
      }
      return null;
    }
  },
  created() {
    // listen for window resize
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    });

    // fetch albums data
    axios.get('/content/albumsData.json', {
      transformResponse: (data) => {
        try {
          data = JSON.parse(data);
        } catch (e) {
          return data;
        }
        for (const album of data) {
          album.date = new Date(album.date);
        }
        return data;
      }
    })
      .then(response => {
        this.albumList = response.data;
      })
      .catch((error) => {
        console.warn(error.message);
      });
  },
  mounted() {
    // initialise album size
    this.albumSize = document.querySelector('#discography .albums').offsetHeight;

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
        this.transX = this.transX % regressionWidth || 0;
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
    },
    readableDate(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[date.getMonth()] + '. ' + date.getDate();
    },
    showAlbumContent(album) {
      this.albumData = album;
      this.albumContentOn = true;
    },
    closeAlbumContent() {
      this.albumContentOn = false;
    },
    eraseAlbumData() {
      this.albumData = undefined;
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
    a {
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

    .album-group {
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

        .album-hover {
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

.album-content-enter-from,
.album-content-leave-to {
  height: 0;
}

.album-content-enter-active,
.album-content-leave-active {
  transition: height 1s ease;
}
</style>
