// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import logo from 'assets/logo.jpg'
import utils from 'utils'
// window.utils = utils

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
    },
    success: function (res) {
    },
    cancel: function (res) {
    },
    fail: function (res) {
      alert('分享失败了，再试一次吧')
    }
  })
  wx.onMenuShareTimeline({
    title: '留学吃鸡小游戏',
    link: wxProcessLink('/'),
    imgUrl: wxProcessLink(logo),
    trigger: function (res) {
    },
    success: function (res) {
    },
    cancel: function (res) {
    },
    fail: function (res) {
      alert('分享失败了，再试一次吧')
    }
  })
})
