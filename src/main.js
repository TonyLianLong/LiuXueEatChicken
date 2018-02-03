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
var from = utils.getUrlKey('from')
if (from) {
  console.log('Invited from ' + from)
  window.sharedLink = utils.wxProcessLink('/?from=' + from)
} else {
  console.log('Not invited')
  window.sharedLink = utils.wxProcessLink('/')
}

wx.ready(function () {
  wx.onMenuShareAppMessage({
    title: '留学吃鸡 | 跟我一起PK留学知识',
    desc: '留学圈最火的知识竞赛小游戏',
    link: window.sharedLink,
    imgUrl: utils.wxProcessLink(logo),
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
    title: '留学吃鸡 | 跟我一起PK留学知识',
    link: window.sharedLink,
    imgUrl: utils.wxProcessLink(logo),
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
