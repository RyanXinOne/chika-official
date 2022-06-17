<template>
  <section>
    <div id="album-close">
      <img src="@/assets/svgs/arrow-top-left.svg" alt="↖close" />
    </div>
    <div id="album-detail">
      <span id="album-title" v-html="albumTitle"></span>
      <span id="album-release">{{ album.date }} Release</span>
      <span class="album-source" v-for="(link, src) in album.sources" :key="src">
        <a :href="link" target="_blank">{{ src }}</a>
      </span>
    </div>
    <span id="album-story">+ Read story</span>
    <div id="album-cover">
      <img :src="album.image" :alt="album.name" />
    </div>
    <div id="album-audition">
      <div id="player-controller" :class="{ paused: !isPlaying }" @click="togglePlay">
        <span v-if="isPlaying">STOP</span>
        <span v-else>PLAY</span>
      </div>
      <div class="album-song" v-for="song in album.songs" :key="song.id" :class="{ playing: song.id == playingSongId }">
        <span>{{ paddingNumber(song.id, 2) }}</span>
        <span>{{ song.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAlbum',
  props: { album: Object },
  data() {
    return {
      isPlaying: false,
      playingSongId: 1
    }
  },
  computed: {
    albumTitle() {
      return this.album.name.replace(/\s+/g, '<br>');
    }
  },
  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    },
    paddingNumber(num, length) {
      return (Array(length).join('0') + num).slice(-length);
    }
  }
}
</script>

<style lang="less" scoped>
section {
  position: relative;
  height: 1000px;
  background: @black-2;
  overflow: hidden;

  #album-close {
    position: absolute;
    top: 0;
    left: 0;
    width: 81px;
    height: 81px;
    box-sizing: border-box;
    border: 5px solid @theme-color;
    cursor: pointer;

    img {
      width: 32px;
      height: 32px;
      padding: 19.5px;
    }
  }

  #album-detail {
    position: absolute;
    left: 89px;
    top: 75px;

    #album-title {
      display: block;
      font-family: 'Clash Grotesk';
      font-style: normal;
      font-weight: 600;
      font-size: 113.097px;
      line-height: 139px;
      letter-spacing: 14.1371px;
      text-transform: capitalize;
      color: @theme-color;
    }

    #album-release {
      display: block;
      margin-top: 4px;
      font-family: @theme-font;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 11px;
      color: @theme-color;
    }

    .album-source {
      display: block;
      margin-top: 10px;
      font-family: @theme-font;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 1px;
      text-decoration-line: underline;
      color: @theme-color;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  #album-story {
    position: absolute;
    left: 89px;
    top: 924px;
    cursor: pointer;

    font-family: @theme-font;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 1px;
    text-decoration-line: underline;
    color: @theme-color;
  }

  #album-cover {
    @length: 480.9px;

    position: absolute;
    right: -14px;
    top: 1px;
    width: @length;
    height: @length;
    border: 6px solid #FFFFFF;
    filter: drop-shadow(-4px 4px 96px rgba(0, 0, 0, 0.1));
    transform: rotate(-30deg);

    img {
      width: @length;
      height: @length;
      object-fit: cover;
    }
  }

  #album-audition {
    position: absolute;
    right: 320px;
    top: 511px;
    width: 471px;

    #player-controller {
      @length: 62px;
      @margin: 22.5px;

      display: inline-block;
      height: @length + @margin * 2;
      margin-bottom: 13px;
      cursor: pointer;

      &::before {
        content: '';
        display: inline-block;
        width: @length;
        height: @length;
        margin: @margin;
        background: @theme-color;
      }

      &.paused::before {
        width: 0;
        height: 0;
        border-top: (@length / 2) solid transparent;
        border-left: (@length * sin(60deg)) solid @theme-color;
        border-bottom: (@length / 2) solid transparent;
        margin: @margin (@margin + @length * (1 - sin(60deg)) / 2);
        background: unset;
      }

      span {
        float: right;
        margin-left: 18px;
        font-family: @theme-font;
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: @length + @margin * 2;
        letter-spacing: 7px;
        text-transform: uppercase;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: @theme-color;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 17px;
      top: 101.5px;
      width: 454px;
      height: 1.5px;
      background: @white;
    }

    .album-song {
      position: relative;
      margin-left: 24px;
      margin-bottom: 16px;
      cursor: pointer;

      font-family: @theme-font;
      font-style: normal;
      font-weight: 300;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 2px;
      color: @white;

      &.playing {
        color: @theme-color;
      }

      span:last-child {
        position: absolute;
        left: 72px;
        white-space: nowrap;
      }
    }
  }
}
</style>
