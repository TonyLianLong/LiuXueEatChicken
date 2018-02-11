<template>
<table class="level-table">
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
  <tr v-if="items.length === 0">
    <td colspan="4">
      排行榜加载中
    </td>
  </tr>
  <tr v-for="(item, index) in items" :key="index">
    <td>{{index+1}}</td>
    <td>{{item["name"]}}</td>
    <td>{{item["correctNum"]}}</td>
    <td>{{prettifyTime(item["time"])}}</td>
  </tr>
</table>
</template>

<script>
export default {
  name: 'LevelTable',
  props: {items: {type: Array, required: true}},
  methods: {
    prettifyTime (time) {
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

<style scoped>
.level-table {
  width: 100%;
  color: #B32C31;
  font-size: 12px;
}
</style>
