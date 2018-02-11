// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import logo from 'assets/logo.jpg'
import utils from 'utils'
import axios from 'axios'
// window.utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
var id = utils.getUrlKey('id')
if (id) {
  console.log('Invited from ' + id)
} else {
  console.log('Not invited')
  id = 0
}
axios.get('https://server2.tonylian.com/id.php?id=' + id)
window.sharedLink = utils.wxProcessLink('/?id=' + id)
// unmute audio for iOS Safari from https://gist.github.com/laziel/7aefabe99ee57b16081c
window.ctx = null
window.usingWebAudio = true
try {
  if (typeof AudioContext !== 'undefined') {
    window.ctx = new AudioContext()
  } else if (typeof webkitAudioContext !== 'undefined') {
    // eslint-disable-next-line
    window.ctx = new webkitAudioContext()
  } else {
    window.usingWebAudio = false
  }
} catch (e) {
  window.usingWebAudio = false
}

// context state at this time is `undefined` in iOS8 Safari
if (window.usingWebAudio && window.ctx.state === 'suspended') {
  console.log('Will unmute')
  window.ctx.resume()
  var resume = function () {
    window.ctx.resume()
    console.log('Unmuting')
    setTimeout(function () {
      if (window.ctx.state === 'running') {
        document.body.removeEventListener('touchend', resume, false)
        console.log('Unmuted')
      }
    }, 0)
  }
  document.body.addEventListener('touchend', resume, false)
} else {
  console.log('No unmute needed')
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
