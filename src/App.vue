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
@import url('https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900,1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
