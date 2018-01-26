<template>
  <div id="app" v-bind:style="style">
    <div id="viewport">
      <router-view/>
    </div>
    <div id="top" />
    <div id="notice">
      <h1>竖起来看效果更好</h1>
      <img src="./assets/banner-bottom.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  data () {
    return {style: {}}
  },
  methods: {
    resizeHandler () {
      let width = window.innerWidth * 0.9
      let height = width * 1.5
      let top = 100
      if ((height + 70) > window.innerHeight) { // screen height is not enough
        height = window.innerHeight - 140
        width = height / 1.5
      } else {
        top = (window.innerHeight - height + 70) / 2
      }
      let left = (window.innerWidth - width) / 2
      console.log({ width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px' })
      if (window.innerHeight < 600) {
        console.log("Small Screen")
        width = window.innerWidth
        height = window.innerHeight
        top = 0
        left = 0
      }
      this.style = { width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px' }
    }
  }
}
</script>

<style>
body {
    background-image: url("./assets/bg.png");
}
#notice {
  display: none;
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
#viewport {
  width: 100%;
  height: 100%;
}
@media screen and (max-height: 415px) {
    #top, #viewport {
      display: none !important;
    }
    #notice {
      display: block !important;
      width: 100%;
      text-align: center;
      height: 208px;
      position: absolute;
      top: calc( 50% - 104px );
    }
}
</style>
