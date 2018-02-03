<!-- 记得做大数据 -->
<template>
  <div id="box" :class="boxClass">
    <h1>挑战者：AQ</h1>
    <div id="sec-col">
      <div id="used-sec">还剩 {{remSecond}} 秒</div>
      <div id="ti-num">答对 {{correctNum}} 题</div>
    </div>
    <div id="question">
      <span>{{question}}</span>
    </div>
    <div v-for="(answer, index) in answers" class="choice" @click="clickAnswer(index+1)" :key="index">
      {{answer}}
    </div>
    <div class="choice" @click="clickSkip()">
      跳过本题
    </div>
  </div>
</template>

<script>
/* eslint-disable */
/* TODO: move questions otherwhere*/
import questions from 'questions'
import audios from 'audios'
export default {
  name: 'Game',
  mounted () {
    this.updateTimeIntervel = setInterval(this.updateTime, 1000)
    this.nextTi(false, true) // init ti
  },
  beforeRouteLeave (to, from, next) {
    if (this.redirect) {
      clearInterval(this.updateTimeIntervel)
      this.countdownAudio.pause()
      next()
    } else {
      const answer = window.confirm('确定不玩了吗？')
      if (answer) {
        clearInterval(this.updateTimeIntervel)
        this.countdownAudio.pause()
        next()
      } else {
        next(false)
      }
    }
  },
  data () {
    return {
      countdownAudio: new Audio(audios.countdown),
      second: 0,
      remSecond: 30,
      redirect: false,
      correctNum: 0,
      question: '',
      answers: ['', '', '', ''],
      correct: 0,
      boxClass: 'box-opaque',
      tiRemain: questions.slice(0)
    }
  },
  methods: {
    updateTime () {
      this.second++
      this.remSecond--
      if (this.remSecond == 10) {
        this.countdownAudio.currentTime = 0
        window.ctx.resume()
        this.countdownAudio.play()
        console.log("Play countdown")
      }
      if (this.remSecond == 0) {
        // Time is up
        this.toResult()
      }
    },
    nextTi (correct, init) { // correct: false if skip
      this.countdownAudio.pause()
      this.remSecond = 30
      let tiNum = this.tiRemain.length
      if (tiNum === 0) {
        this.toResult()
      } else {
        let tiIndex
        if (tiNum < 50) { // less than 50 remain
          tiIndex = Math.floor(Math.random() * tiNum)
        } else {
          tiIndex = Math.floor(Math.random() * tiNum / 3 * 2) // get only the first 2/3
        }
        let ti = this.tiRemain[tiIndex]
        this.tiRemain.splice(tiIndex, 1)
        if (correct) {
          this.correctNum ++
        }
        if (!init) {
          this.boxClass = "box-opaque"
          setTimeout(()=>{
            this.boxClass = ""
            this.question = ti[0]
            this.answers = ti.slice(1, 5)
            this.correct = Number(ti[5])
          }, 300)
        } else {
          this.boxClass = ""
          this.question = ti[0]
          this.answers = ti.slice(1, 5)
          this.correct = Number(ti[5])
        }
      }
    },
    toResult() {
      this.redirect = true
      this.$router.push('/result/'+this.correctNum+'/'+this.second)
    },
    clickAnswer (ansNum) {
      console.log(ansNum, this.correct)
      if (ansNum === this.correct) {
        console.log('correct')
        window.ctx.resume()
        new Audio(audios.right).play()
        this.nextTi(true, false)
      } else {
        window.ctx.resume()
        new Audio(audios.wrong).play()
        console.log('not right')
        this.toResult()
      }
    },
    clickSkip () {
      console.log('Skip')
      this.nextTi(false, false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 25px;
  margin: 0;
  text-align: center;
}
#sec-col {
  width: 100%;
  height: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #4C040C;
}
#used-sec {
  position: absolute;
  left: 15%;
}
#ti-num {
  position: absolute;
  right: 15%;
}
#question {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
}
#question span {
  display: inline-block;
  text-align: left !important;
}
.choice {
  cursor: pointer;
  padding: 5px;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
  border-radius: 10px;
  border: solid #F3E2D9;
  color: #A51A2A;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.choice:active {
  background-color: #F3E2D9;
}
#box{
  color: #C21529;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
}
.box-opaque {
  opacity: 0;
}
</style>
