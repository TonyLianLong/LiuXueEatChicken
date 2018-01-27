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
    resizeHandler (e, recalled) {
      var width = window.innerWidth * 0.9
      var height = width * 1.5
      var top = 100
      if ((height + 70) > window.innerHeight) { // screen height is not enough
        height = window.innerHeight - 140
        width = height / 1.5
      } else {
        top = (window.innerHeight - height + 70) / 2
      }
      var left = (window.innerWidth - width) / 2
      console.log({ width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px' })
      if (window.innerHeight < 500) {
        console.log('Really Small Screen')
        width = window.innerWidth
        height = window.innerHeight
        top = 0
        left = 0
      } else if(window.innerHeight < 600) {
        console.log('Small Screen')
        width = window.innerWidth - 20
        height = window.innerHeight - 60
        top = 60
        left = (window.innerWidth - width) / 2
      }
      this.style = { width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px' }
      if (!recalled) {
        setTimeout(() => { this.resizeHandler(e, true) }, 100) // call the function itself again later to ensure change has happened
      }
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
  font-family: 'PingFangSC-Light', 'SimHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FF883C;
  position: absolute;
  left: 0;
  background-color: #FFF3E3;
  border-radius: 30px;
  border: solid 5px #C11025;
  padding: 0 0 20px 0;
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
