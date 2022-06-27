<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&f[]=montserrat@500,1,900,700,400,800,300,600&f[]=clash-grotesk@700,400,600,300,1,500&display=swap');

@font-face {
  font-family: 'Solano Gothic MVB';
  src: url('@/assets/fonts/SolanoGothicMVB-Bd.ttf') format('truetype');
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>
