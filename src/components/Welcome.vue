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
      <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUyOTU2OTUwNQ==&scene=124#wechat_redirect">
        <img src="../assets/banner-bottom.png" />
      </a>
    </div>
    <a id="rule-btn" href="/">
        <svg class="icon" width="30px" height="30px" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffae43" d="M512.010653 1024C229.693194 1024 0 794.328111 0 511.989347 0 229.693194 229.693194 0 512.010653 0s512.010653 229.693194 512.010653 512.010653C1024.021305 794.306806 794.306806 1024 512.010653 1024L512.010653 1024zM512.010653 73.141335c-241.986393 0-438.848012 196.861619-438.848012 438.848012 0 241.986393 196.861619 438.848012 438.848012 438.848012 241.986393 0 438.848012-196.861619 438.848012-438.848012C950.858665 270.002954 753.997046 73.141335 512.010653 73.141335L512.010653 73.141335zM695.449889 455.615338c-9.651333 19.813994-23.265464 44.528223-54.66958 74.078772-31.38281 29.593159-52.219462 24.394649-62.48865 36.836985-10.247883 12.527558-18.024343 27.462622-23.32938 44.826499-5.262426 17.385182-3.579302 9.651333-3.579302 18.791336l-78.787258 0c0-11.568816-3.898883-10.247883 1.683124-30.679733 5.603312-20.410544 13.976323-38.243139 25.182947-53.497784 11.206625-15.23334 31.404115-11.355762 60.635083-40.948921 29.230968-29.593159 48.043609-51.047667 56.41662-64.47005 8.415621-13.422383 12.591474-33.385515 12.591474-59.910701 0-26.546491-9.651333-50.003703-28.890082-70.435553-19.28136-20.410544-47.276616-30.637122-83.964463-30.637122-82.686141 0-122.420656 44.229948-122.420656 140.551526l-78.787258 0c1.257017-43.889062 3.579302-73.311778 12.889749-96.17244 9.353057-22.860662 22.306722-43.271207 42.802488-61.252939 20.538377-17.981732 43.377733-31.233672 68.539375-39.798431 25.204253-8.543453 51.793355-12.825833 79.746-12.825833 56.587063 0 102.713189 19.217444 140.338472 51.857271 34.983418 30.338847 49.534985 75.442315 49.534985 127.427418C708.936188 413.68637 705.101221 435.801344 695.449889 455.615338L695.449889 455.615338zM551.404282 787.680836l-1.832262 0-103.203212 0 0-105.035474 105.035474 0L551.404282 787.680836 551.404282 787.680836z" /></svg>
    </a>
  </div>
</template>

<script>
import audios from 'audios'
export default {
  name: 'Welcome',
  methods: {
    start (event) {
      new Audio(audios.startChallenge).play()
      this.$router.push('/game')
    },
    result (event) {
      new Audio(audios.clickButton).play()
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
#rule-btn {
  position: absolute;
  right: 20px;
  top: 20px;
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
  margin-top: 50px;
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
