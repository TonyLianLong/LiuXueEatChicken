<!-- 记得做大数据 -->
<template>
  <div id="box" :class="boxClass">
    <h1>挑战者：AQ</h1>
    <div id="sec-col">
      <div id="used-sec">已用 {{second}} 秒</div>
      <div id="ti-num">答对 {{correctNum}} 题</div>
    </div>
    <div id="question">
      {{question}}
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
export default {
  name: 'Game',
  mounted () {
    setInterval(this.updateTime, 1000)
    this.nextTi(false, true) // init ti
  },
  data () {
    return {
      second: 0,
      correctNum: 0,
      question: '',
      answers: ['', '', '', ''],
      correct: 0,
      boxClass: 'box-opaque',
      tiRemain: [['为什么UIUC被戏称为“玉米田里的大学”？','UIUC的食堂玉米特别好吃','UIUC在美国中部，附近都是玉米田','UIUC的气候是热带玉米性气候，','UIUC的学生特别希望吃玉米','2'],
      ['为什么NYU纽约大学的学生自称紫钻贵族？','NYU的学生都有冲qq紫钻','纽约大学钻石研究专业全美第一，校园内有世界上最大的紫钻','NYU的主题色是红色和蓝色，混合即为紫色','NYU学校的主题色是紫色','4'],
      ['下列方法哪个可以最好的提高托福写作？','每天阅读范文，同时练习写作，学以致用','每天阅读范文，但是不自己写','每天看美剧，了解美国俚语','每天听嘻哈音乐，寻找写作灵感','1'],
      ['美国大学申请关注哪几个内容？','SAT，ACT等考试成绩，只需成绩即可','美国大学属于抽签制，抽到即被录取','SAT，ACT等考试成绩，和社会活动经历，综合考虑','参加美国的全球统一高考，上国服本一线即被录取','3'],
      ['下列哪个AP考试不能在中国大陆报考','AP美国历史','AP环境科学','AP统计学','AP中文','4'],
      ['主文书务必避免的做法是什么？','他人代写或弄虚作假','细节描写，场景描写','人物内心表现','声明自己兴趣和未来规划','3']]
    }
  },
  methods: {
    updateTime () {
      this.second++
    },
    nextTi (correct, init) { // correct: false if skip
      let tiNum = this.tiRemain.length
      if (tiNum === 0) {
        this.$router.push('/result/'+this.correctNum+'/'+this.second)
      }
      let tiIndex
      if (tiNum < 50) { // less than 50 remain
        tiIndex = Math.floor(Math.random() * tiNum)
      } else {
        tiIndex = Math.floor(Math.random() * tiNum / 3 * 2) // get only the first 2/3
      }
      let ti = this.tiRemain[tiIndex]
      this.tiRemain.splice(tiIndex, 1)
      if(correct) {
        this.correctNum ++
      }
      if(!init) {
        this.boxClass = "box-opaque"
        setTimeout(()=>{
          this.boxClass = ""
          this.question = ti[0]
          this.answers = ti.slice(1, 5)
          this.correct = Number(ti[5])
        }, 300)
      }else{
        this.boxClass = ""
        this.question = ti[0]
        this.answers = ti.slice(1, 5)
        this.correct = Number(ti[5])
      }
    },
    clickAnswer (ansNum) {
      console.log(ansNum, this.correct)
      if (ansNum === this.correct) {
        console.log('correct')
        this.nextTi(true, false)
      } else {
        console.log('not right')
        this.$router.push('/result/'+this.correctNum+'/'+this.second)
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
  font-size: 30px;
  margin: 0;
  text-align: center;
}
#sec-col {
  width: 100%;
  height: 0;
  margin-bottom: 25px;
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
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;
}
.choice {
  font-size: 20px;
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
