<template>
  <div id="box">
    <h1>排行榜</h1>
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
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AQ</td>
          <td>150</td>
          <td>30min5s</td>
        </tr>
      </table>
    </div>
    <b-button id="back-btn" size="lg" variant="primary" @click="back">
        返回
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
  font-size: 50px;
  text-align: center;
}
#level-table {
  width: 100%;
  color: #B32C31;
}
#back-btn {
  margin-left: calc( 50% - 75px );
  margin-right: calc( 50% - 75px );
  width: 150px;
  height: 50px;
  font-size: 25px;
  margin-top: 30px;
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
