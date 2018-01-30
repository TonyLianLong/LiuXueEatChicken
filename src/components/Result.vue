<template>
  <div id="box">
    <h1>挑战结束</h1>
    <h2 id="res-txt">答对{{correctNum}}题  用时{{prettifiedTime}}</h2>
    <h2>排行榜</h2>
    <LevelTable />
    <div id="banner-bottom">
      <img src="../assets/banner-bottom.png" />
    </div>
    <b-button id="back-btn" size="lg" variant="primary" @click="back">
        返回
    </b-button>
  </div>
</template>

<script>
import LevelTable from 'components/LevelTable'
export default {
  name: 'Result',
  methods: {
    back () {
      this.$router.go(-2)
    }
  },
  computed: {
    correctNum () {
      return this.$route.params.correctNum
    },
    time () {
      return this.$route.params.time
    },
    prettifiedTime () {
      let time = this.$route.params.time
      if (time < 60) {
        return time + '秒'
      } else if (time % 60 === 0) {
        return (time / 60) + '分'
      } else {
        return Math.floor(time / 60) + '分' + time % 60 + '秒'
      }
    }
  },
  components: {
    LevelTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 25px;
  text-align: center;
}
h2 {
  font-size: 18px;
  text-align: center;
}
#back-btn {
  margin-left: calc( 50% - 65px );
  margin-right: calc( 50% - 65px );
  width: 130px;
  height: 40px;
  font-size: 19px;
  margin-top: 0px;
}
#res-txt {
    color: #A53837;
}
#back-btn {
  margin-left: calc( 50% - 40px );
  margin-right: calc( 50% - 40px );
  width: 80px;
  height: 40px;
  font-size: 16px;
  padding: 0px 16px;
  margin-top: 5px;
}
#box{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
}
#banner-bottom {
  margin-top: 0px;
  margin-bottom: 0px;
}
#banner-bottom img {
  width: 60%;
}
</style>
