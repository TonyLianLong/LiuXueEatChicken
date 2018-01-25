<template>
  <div id="app" v-bind:style="style">
    <router-view/>
    <div id="top" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    style () {
      let width = window.innerWidth * 0.9 + 'px'
      let height = window.innerWidth * 1.5 * 0.9 + 'px'
      let top = (window.innerHeight - window.innerWidth * 1.5 * 0.9 + 70) / 2 + 'px'
      let left = window.innerWidth * 0.05 + 'px'
      return { width, height, top, left }
    }
  }
}
</script>

<style>
body {
    background-image: url("./assets/bg.png");
}
#app {
  font-family: 'PingFangSC-Light', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FF883C;
  position: absolute;
  left: 0;
  background-color: #FFF3E3;
  border-radius: 30px;
  border: solid 5px #C11025;
  padding: 20px 0;
  z-index: -999;
}
#top {
  z-index: -998;
  position: absolute;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url("./assets/top.png");
  background-size: contain;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  height: 100%;
  top: -193px;
}
</style>
