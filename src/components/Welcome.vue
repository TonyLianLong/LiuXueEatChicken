<template>
  <div class="viewport" v-bind:style="{ width, height }">
    <h1 id="main-title">头脑风暴</h1>
    <b-button id="start-btn" size="lg" variant="primary" @click="start">
        开始挑战
    </b-button>
    <img src="../assets/banner-bottom.png" id="banner-bottom"/>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$route.params.username
    },
    width () {
      return window.innerWidth + 'px'
    },
    height () {
      return window.innerWidth * 1.5 + 'px'
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    start (event) {
      this.$router.push('/answer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewport {
  border: solid black 1px; /* For testing */
}
#start-btn {

}
#banner-bottom {
  margin-top: 120px;
  padding: 0 20px;
  width: 100%;
}
#main-title {
  margin-top: 100px;
  text-align: center;
  font-size: 60px;
  margin-bottom: 30px;
}
</style>
