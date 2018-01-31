import axios from 'axios'
export default {
  getLevel (params, success = function (response) {
    console.log(response)
  }, fail = function (error) {
    console.log(error)
    alert('获取排行榜出错了 ' + error)
  }) {
    console.log('Sending getLevel request', params)
    return axios.post('https://xmoclxcj.duapp.com/leveltable.php', params)
      .then(success)
      .catch(fail)
  }
}
