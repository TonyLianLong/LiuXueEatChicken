<template>
  <div id="box">
    <h1>挑战结束</h1>
    <h2 id="res-txt">答对{{correctNum}}题  用时{{prettifiedTime}}</h2>
    <h2>排行榜</h2>
    <div>
      <table id="level-table">
        <tr>
          <th>
            名次
          </th>
          <th>
            昵称
          </th>
          <th>
            答对题数
          </th>
          <th>
            用时
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30分5秒</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AQ</td>
          <td>150</td>
          <td>30分10秒</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AQ</td>
          <td>150</td>
          <td>31分5秒</td>
        </tr>
        <tr>
          <td>4</td>
          <td>AQ</td>
          <td>150</td>
          <td>32分5秒</td>
        </tr>
        <tr>
          <td>5</td>
          <td>AQ</td>
          <td>150</td>
          <td>32分10秒</td>
        </tr>
        <tr>
          <td>6</td>
          <td>AQ</td>
          <td>150</td>
          <td>32分20秒</td>
        </tr>
        <tr>
          <td>7</td>
          <td>AQ</td>
          <td>150</td>
          <td>32分50秒</td>
        </tr>
        <tr>
          <td>8</td>
          <td>AQ</td>
          <td>150</td>
          <td>33分5秒</td>
        </tr>
        <tr>
          <td>9</td>
          <td>AQ</td>
          <td>150</td>
          <td>34分5秒</td>
        </tr>
        <tr>
          <td>10</td>
          <td>AQ</td>
          <td>150</td>
          <td>35分5秒</td>
        </tr>
      </table>
    </div>
    <div id="banner-bottom">
      <img src="../assets/banner-bottom.png" />
    </div>
    <b-button id="back-btn" size="lg" variant="primary" @click="back">
        返回
    </b-button>
  </div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 35px;
  text-align: center;
}
h2 {
  font-size: 20px;
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
#level-table {
  width: 100%;
  color: #B32C31;
  font-size: 14px;
}
#back-btn {
  margin-left: calc( 50% - 40px );
  margin-right: calc( 50% - 40px );
  width: 80px;
  height: 50px;
  font-size: 20px;
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
