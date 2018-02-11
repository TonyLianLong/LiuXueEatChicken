import axios from 'axios'
export default {
  getLevel (params, success = function (response) {
    console.log(response)
  }, fail = function (error) {
    console.log(error)
    alert('获取排行榜出错了 ' + error)
  }) {
    console.log('Sending getLevel request', params)
    return axios.post('https://server2.tonylian.com/leveltable.php', params)
      .then(success)
      .catch(fail)
  },
  getFullLevel (params, success = function (response) {
    console.log(response)
  }, fail = function (error) {
    console.log(error)
    alert('获取排行榜出错了 ' + error)
  }) {
    console.log('Sending getFullLevel request', params)
    return axios.post('https://server2.tonylian.com/fullleveltable.php', params)
      .then(success)
      .catch(fail)
  },
  getUrlKey (name) {
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null
  },
  wxProcessLink (link) {
    if (link.indexOf('/') === 0) {
      return 'http://lxcj.applinzi.com' + link
    }
  }
}
