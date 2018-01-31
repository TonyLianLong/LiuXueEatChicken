<template>
  <div id="box">
    <h1 id="main-title">排行榜</h1>
    <LevelTable :items="items" />
    <div id="banner-bottom">
      <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUyOTU2OTUwNQ==&scene=124#wechat_redirect">
        <img src="../assets/banner-bottom.png" />
      </a>
    </div>
    <b-button id="back-btn" variant="primary" @click="back">
        返回
    </b-button>
  </div>
</template>

<script>
import audios from 'audios'
import LevelTable from 'components/LevelTable'
import utils from 'utils'
export default {
  name: 'Result',
  mounted () {
    var that = this
    utils.getLevel({}, function (response) {
      console.log(response)
      that.items = response.data.items
    })
  },
  methods: {
    back () {
      // this.$router.push('/')
      new Audio(audios.clickButton).play()
      this.$router.go(-1)
    }
  },
  data () {
    return {items: []}
  },
  components: {
    LevelTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-title {
  font-size: 25px;
  text-align: center;
  margin: 0;
}
#level-table {
  width: 100%;
  font-size: 15px;
  color: #B32C31;
}
#back-btn {
  margin-left: calc( 50% - 45px );
  margin-right: calc( 50% - 45px );
  width: 80px;
  height: 35px;
  font-size: 15px;
  margin-top: 0px;
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
  width: 80%;
}
</style>
