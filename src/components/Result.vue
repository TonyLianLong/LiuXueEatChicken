<template>
  <div id="box">
    <h1>{{title}}</h1>
    <h2 id="res-txt">答对{{correctNum}}题  用时{{prettifiedTime}}</h2>
    <h2>排行榜</h2>
    <LevelTable />
    <div id="banner-bottom">
      <img src="../assets/banner-bottom.png" />
    </div>
    <div class="hid" v-if="cjShowed">
    </div>
    <div class="cj" v-if="cjShowed">
      <h1>获得一次抽奖机会</h1>
      <p>恭喜您转发成功，获得一次抽奖机会！</p>
      <p>请先<b>将本页截图</b>，长按<b>扫描屏幕下方二维码</b>，进入XMOC微信公众号，发送“抽奖”二字获取具体流程。</p>
      <p>本活动将在2月21日晚九点在公众号“中学生留学就这YOUNG”开奖，届时邀请您前来关注哦～</p>
      <p style="text-align:center;"><img src="../assets/qrcode.png" /></p>
      <p style="text-align:center;">随机抽奖码：{{cjCode}}</p>
      <div id="close-btn" @click="hideCjPanel">
        <svg t="1517390654710" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1865" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
          <path d="M155.252 943.825c-19.213 0-38.429-7.332-53.089-21.988-29.317-29.321-29.317-76.855 0-106.175l713.494-713.494c29.317-29.321 76.853-29.321 106.175 0 29.317 29.317 29.317 76.855 0 106.175l-713.494 713.494c-14.66 14.66-33.874 21.988-53.089 21.988z" fill="#F4B058" p-id="1866"></path>
          <path d="M868.749 943.824c-19.213 0-38.428-7.332-53.089-21.988l-713.494-713.493c-29.317-29.317-29.317-76.857 0-106.175 29.316-29.317 76.855-29.321 106.174 0l713.494 713.492c29.317 29.321 29.317 76.855 0 106.175-14.657 14.661-33.871 21.993-53.087 21.993z" fill="#F4B058" p-id="1867"></path>
        </svg>
      </div>
    </div>
    <b-button id="back-btn" size="lg" variant="primary" @click="back">
        返回
    </b-button>
    <div id="cj-notice">
      <img src="../assets/guide.png" />
    </div>
  </div>
</template>

<script>
import audios from 'audios'
import LevelTable from 'components/LevelTable'
import logo from 'assets/logo.jpg'
export default {
  name: 'Result',
  mounted () {
    var correctNum = this.correctNum
    var that = this
    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: '跟我一起PK留学知识',
        desc: '我对了' + correctNum + '题，你呢？',
        link: that.wxProcessLink('/'),
        imgUrl: that.wxProcessLink(logo),
        trigger: function (res) {
        },
        success: function (res) {
          that.cj()
        },
        cancel: function (res) {
        },
        fail: function (res) {
          alert('分享失败了，再试一次吧')
        }
      })
      wx.onMenuShareTimeline({
        title: '跟我一起PK留学知识吧，我对了' + correctNum + '题，你呢？',
        link: that.wxProcessLink('/'),
        imgUrl: that.wxProcessLink(logo),
        trigger: function (res) {
        },
        success: function (res) {
          that.cj()
        },
        cancel: function (res) {
        },
        fail: function (res) {
          alert('分享失败了，再试一次吧')
        }
      })
    })
  },
  data () {
    var cjCode = Date.parse(new Date()) + Math.floor(Math.random() * 10000)
    return {cjShowed: false, cjCode: cjCode}
  },
  methods: {
    back () {
      new Audio(audios.clickButton).play()
      this.$router.go(-2)
    },
    wxProcessLink (link) {
      if (link.indexOf('/') === 0) {
        return 'http://xmoclxcj.duapp.com' + link
      }
    },
    cj () {
      if (this.cjShowed === true) {
        return
      }
      this.cjShowed = true
    },
    hideCjPanel (e) {
      this.cjShowed = false
    }
  },
  computed: {
    correctNum () {
      return this.$route.params.correctNum
    },
    title () {
      if (Number(this.$route.params.correctNum) === 150) {
        return '挑战成功'
      } else {
        return '挑战结束'
      }
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
  },
  components: {
    LevelTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 25px;
  text-align: center;
  padding-bottom: 20px;
}
h2 {
  font-size: 18px;
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
#back-btn {
  margin-left: calc( 50% - 40px );
  margin-right: calc( 50% - 40px );
  width: 80px;
  height: 40px;
  font-size: 16px;
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
  img {
    width: 60%;
  }
}
#cj-notice {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  text-align: right;
  img {
    width: 50%;
  }
}
#close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
.cj {
  position: fixed;
  left: 10%;
  top: calc( 50% - 200px );
  width: 80%;
  height: 400px;
  background-color: #FDF3E5;
  border-radius: 10px;
  border: solid 2px #C11025;
  z-index: 999;
  padding: 20px;
  text-align: justify;
  p {
      color: #000;
      font-size: 13px;
  }
  img {
      width: 100px;
  }
}
.hid {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
