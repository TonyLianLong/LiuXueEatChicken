<template>
  <div id="box">
    <h1 id="main-title">留学吃鸡</h1>
    <b-button id="start-btn" size="lg" variant="primary" @click="start">
        开始挑战
    </b-button>
    <b-button id="result-btn" @click="result">
        排行榜
    </b-button>
    <div id="banner-bottom">
      <img src="../assets/banner-bottom.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    start (event) {
      this.$router.push('/game')
    },
    result (event) {
      this.$router.push('/level')
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
  margin-left: calc( 50% - 90px );
  margin-right: calc( 50% - 90px );
  width: 180px;
  height: 50px;
  font-size: 20px;
  margin-top: 30px;
}
#result-btn {
  margin-left: calc( 50% - 90px );
  margin-right: calc( 50% - 90px );
  width: 180px;
  height: 50px;
  font-size: 20px;
  margin-bottom: 30px;
}
#banner-bottom {
  margin-top: 20px;
  margin-bottom: 10px;
}
#banner-bottom img {
  width: 90%;
}
#main-title {
  font-family: 'PingFangSC-Medium';
  margin-top: 20px;
  text-align: center;
  font-size: 55px;
}
#box{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
}
</style>
