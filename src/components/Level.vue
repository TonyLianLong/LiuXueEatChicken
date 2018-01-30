<template>
  <div id="box">
    <h1 id="main-title">排行榜</h1>
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
    <b-button id="back-btn" variant="primary" @click="back">
        返回
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  methods: {
    back () {
      // this.$router.push('/')
      this.$router.go(-1)
    }
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
