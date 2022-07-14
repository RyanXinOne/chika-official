<template>
  <section class="album-content" :class="{ 'fade-out': transitionFrom, 'fade-in': transitionTo }">
    <div class="close-btn" @click="$emit('closeSection')">
      <img src="@/assets/svgs/arrow-top-left.svg" alt="↖close" />
    </div>
    <div class="details">
      <span class="title" v-html="albumTitleRendered"></span>
      <span class="release-date">{{ dotJoinDate(albumDataEn.date) }} Release</span>
      <a class="album-source" v-for="(link, src) in albumDataEn.sources" :key="src" :href="link" target="_blank">{{ src }}</a>
    </div>
    <span class="story-btn">+ Read story</span>
    <div class="cover">
      <img :src="albumDataEn.image" :alt="albumDataEn.name" />
    </div>
    <div class="audition-player">
      <div class="player-controller" :class="{ paused: !isPlaying }" @click="togglePlay">
        <span v-if="isPlaying">STOP</span>
        <span v-else>PLAY</span>
      </div>
      <div class="player-progress">
        <div class="player-progress-bar" @click="setProgressByClick">
          <div :style="{ width: progressInPercent }"></div>
        </div>
        <span class="player-progress-text">{{ remainingTimeReadable }}</span>
      </div>
      <div class="song-list">
        <div class="player-song" v-for="(song, index) in albumDataEn.songs" :key="index" :class="{ playing: index === playingSongId }" @click="playSongByIndex(index)" :title="song.name">
          <span>{{ paddingNumber(index + 1, 2) }}</span>
          <span>{{ song.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAlbum',
  props: {
    albumData: {
      type: Object,
      default() {
        return { name: '', date: new Date(), image: '', sources: {}, songs: [], isNew: false, _isDefault: true };
      }
    }
  },
  emits: { closeSection: null },
  data() {
    return {
      albumDataEn: this.albumData,
      audio: new Audio(),
      isPlaying: false,
      playingSongId: 0,
      currentTime: 0,
      duration: NaN,
      transitioning: 'stopped'
    }
  },
  computed: {
    albumTitleRendered() {
      return this.albumDataEn.name.replace(/\s+/g, '<br>');
    },
    remainingTimeReadable() {
      let remainingTimeInSec = this.duration - this.currentTime;
      if (isNaN(remainingTimeInSec)) {
        return '';
      }
      let mins = Math.floor(remainingTimeInSec / 60);
      let secs = Math.floor(remainingTimeInSec % 60);
      return mins + ':' + this.paddingNumber(secs, 2);
    },
    progressInPercent() {
      if (isNaN(this.duration)) {
        return 0 + '%';
      }
      return (this.currentTime / this.duration * 100) + '%';
    },
    transitionFrom() {
      return this.transitioning === 'from';
    },
    transitionTo() {
      return this.transitioning === 'to';
    }
  },
  created() {
    // initialise audio
    this.audio.preload = 'metadata';

    // list loop
    this.audio.addEventListener('ended', () => {
      this.updatePlayingSongById(++this.playingSongId % this.albumDataEn.songs.length);
    });

    // monitor audio progress
    this.audio.addEventListener('durationchange', () => {
      this.duration = this.audio.duration;
    });
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
    });

    // initialise playing song
    this.updatePlayingSongById(0);
  },
  watch: {
    isPlaying(newValue) {
      if (newValue) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    albumData(newValue, oldValue) {
      // skip fade animation if enter or leave
      if (newValue._isDefault || oldValue._isDefault) {
        this.albumDataEn = newValue;
      } else {
        // remove preexistent animation
        clearTimeout(this.transitionTimeOut);

        // start fade-out animation
        this.transitioning = 'from';

        this.transitionTimeOut = setTimeout(() => {
          // start fade-in animation
          this.albumDataEn = newValue;
          this.transitioning = 'to';

          this.transitionTimeOut = setTimeout(() => {
            // animation ended
            this.transitioning = 'stopped';
          }, 500);
        }, 500);
      }
    },
    albumDataEn() {
      // content updated, update playing song
      this.updatePlayingSongById(0);
    }
  },
  methods: {
    togglePlay() {
      // reject playing if there is no valid playing song
      if (this.albumDataEn.songs[this.playingSongId] !== undefined) {
        this.isPlaying = !this.isPlaying;
      }
    },
    updatePlayingSongById(index) {
      this.playingSongId = index;

      // update playing song link, empty string if invalid id
      const song = this.albumDataEn.songs[this.playingSongId];
      const playingSongLink = song !== undefined ? song.link : '';

      // reject playing if there is no valid playing song
      this.isPlaying &&= playingSongLink !== '';

      // the update of playingSongId forces to reload the audio, even if source link remains unchanged
      this.audio.src = playingSongLink;
      this.currentTime = 0;
      this.duration = NaN;
      this.audio.load();
      if (this.isPlaying) {
        this.audio.play();
      }
    },
    playSongByIndex(index) {
      if (index === this.playingSongId) {
        this.togglePlay();
      } else {
        this.updatePlayingSongById(index);
      }
    },
    setProgressByClick(event) {
      this.audio.currentTime = event.offsetX / event.target.offsetWidth * this.duration;
    },
    paddingNumber(num, length) {
      return (Array(length).join('0') + num).slice(-length);
    },
    dotJoinDate(date) {
      return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    }
  }
}
</script>

<style lang="less" scoped>
.album-content {
  position: relative;
  height: 1000px;
  background: @black-2;
  overflow: hidden;

  .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 81px;
    height: 81px;
    box-sizing: border-box;
    border: 5px solid @theme-color;
    user-select: none;
    cursor: pointer;

    img {
      width: 32px;
      height: 32px;
      padding: 19.5px;
    }
  }

  .details {
    position: absolute;
    left: 89px;
    top: 75px;

    .title {
      display: block;
      font-family: 'Clash Grotesk', @base-font;
      font-style: normal;
      font-weight: 600;
      font-size: 113.097px;
      line-height: 139px;
      letter-spacing: 14.1371px;
      text-transform: capitalize;
      color: @theme-color;
    }

    .release-date {
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
    }
  }

  .story-btn {
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

  .cover {
    @length: 480.9px;

    position: absolute;
    right: -14px;
    top: 1px;
    width: @length;
    height: @length;
    border: 6px solid @white;

    @keyframes falling {
      0% {
        transform: translateX(65%) translateY(-115%) rotate(-90deg);
      }

      100% {
        transform: rotate(-30deg);
        filter: drop-shadow(-4px 4px 96px rgba(0, 0, 0, 0.1));
      }
    }

    animation: falling 3s ease;
    animation-delay: 0.5s;
    animation-fill-mode: both;

    img {
      width: @length;
      height: @length;
      object-fit: cover;
    }
  }

  .audition-player {
    position: absolute;
    right: 320px;
    top: 511px;
    width: 471px;

    .player-controller {
      @length: 52px;
      @margin: 27px;

      display: inline-block;
      height: @length + @margin * 2;
      cursor: pointer;
      user-select: none;

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
        margin: @margin (@margin + @length * (1 - sin(60deg)) / 2);
        background: transparent;
        border-top: (@length / 2) solid transparent;
        border-left: (@length * sin(60deg)) solid @theme-color;
        border-bottom: (@length / 2) solid transparent;
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

    .player-progress {
      @bar-height: 2px;
      @padding-v: 10px;

      position: absolute;
      top: 101.5px - @padding-v;
      height: @padding-v * 2 + @bar-height;

      .player-progress-bar {
        position: relative;
        display: inline-block;
        width: 454px;
        height: @bar-height;
        padding: @padding-v 0;
        margin: 0 17px;
        cursor: pointer;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: @bar-height;
          background: @white;
        }

        div {
          position: absolute;
          height: @bar-height;
          background: @theme-color;
        }
      }

      .player-progress-text {
        position: absolute;
        font-family: @theme-font;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: @padding-v * 2 + @bar-height;
        letter-spacing: 2px;
        color: @white;
      }
    }

    .song-list {
      position: absolute;
      top: 120px;
      left: 24px;
      display: flex;
      width: 512px;
      flex-direction: column;
      gap: 16px;

      .player-song {
        position: relative;
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
          display: inline-block;
          width: 440px;

          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;

    visibility: hidden;
    opacity: 0;
  }

  &.fade-out::after {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }

  &.fade-in::after {
    visibility: visible;
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
}
</style>
