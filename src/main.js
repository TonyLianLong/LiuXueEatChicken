// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import logo from 'assets/logo.jpg'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
function wxProcessLink (link) {
  if (link.indexOf('/') === 0) {
    return 'http://xmoclxcj.duapp.com' + link
  }
}
wx.ready(function () {
  wx.onMenuShareAppMessage({
    title: '留学吃鸡小游戏',
    desc: '留学圈最火的一个知识竞赛小游戏',
    link: wxProcessLink('/'),
    imgUrl: wxProcessLink(logo),
    trigger: function (res) {
      // alert('用户点击发送给朋友');
    },
    success: function (res) {
      // alert('已分享');
    },
    cancel: function (res) {
      // alert('已取消');
    },
    fail: function (res) {
      // alert(JSON.stringify(res));
    }
  })

  wx.onMenuShareTimeline({
    title: '留学吃鸡小游戏',
    link: wxProcessLink('/'),
    imgUrl: wxProcessLink(logo),
    trigger: function (res) {
      // alert('用户点击分享到朋友圈');
    },
    success: function (res) {
      // alert('已分享');
    },
    cancel: function (res) {
      // alert('已取消');
    },
    fail: function (res) {
      // alert(JSON.stringify(res));
    }
  })
})
