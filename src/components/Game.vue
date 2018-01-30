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
      next()
    } else {
      const answer = window.confirm('确定不玩了吗？')
      if (answer) {
        clearInterval(this.updateTimeIntervel)
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
      tiRemain: [
  ["为什么NYU纽约大学的学生自称紫钻贵族？","NYU的学生都有冲qq紫钻","纽约大学钻石研究专业全美第一，校园内有世界上最大的紫钻","NYU的主题色是红色和蓝色，混合即为紫色","NYU学校的主题色是紫色",4  ],
  ["下列方法哪个可以最好的提高托福写作？","每天阅读范文，同时练习写作，学以致用","每天阅读范文，但是不自己写","每天看美剧，了解美国俚语","每天听嘻哈音乐，寻找写作灵感",1  ],
  ["美国大学申请关注哪几个内容？","SAT，ACT等考试成绩，只需成绩即可","美国大学属于抽签制，抽到即被录取","SAT，ACT等考试成绩，和社会活动经历，综合考虑","参加美国的全球统一高考，上国服本一线即被录取",3  ],
  ["下列哪个AP考试不能在中国大陆报考","AP美国历史","AP环境科学","AP统计学","AP中文",4  ],
  ["主文书务必避免的做法是什么？","他人代写或弄虚作假","细节描写，场景描写","人物内心表现","声明自己兴趣和未来规划",3  ],
  ["新SAT满分多少？","900","1500","1600","2400",3  ],
  ["ACT考试时间一般多久？","一天","连续3天，每天两科目","半天","看个人速度，可提前交卷离开",3  ],
  ["ACT和SAT的共同点或不同点：","ACT是美国高考，SAT是英国高考","ACT有科学推理，SAT没有","SAT比ACT难，是ACT的进阶考试","SAT考试时间更短对速度要求高",2  ],
  ["TOEFL考试遇到听力或阅读加试的几率大概多少：","偶尔会遇到","几乎每次都会遇到","托福没有加试","遇到的几率比写作加试几率低",1  ],
  ["以下哪种考试不适用于本科出国申请？","托福","ACT","SAT","GRE",4  ],
  ["AP考试在每年的几月份进行？","5月","6月","9月","12月",1  ],
  ["厦门中学生留学俱乐部的英文简称是？","XMOC","XMOA","XOA","XMC",1  ],
  ["厦门中学生留学俱乐部的公众号名是？","留学生就这样","中学生留学就这YOUNG","中学生就这样","Amoy学生就这YOUNG",2  ],
  ["被称为最好录取的常春藤大学是哪一所？","密歇根大学","滨州社区大学","布朗大学","康奈尔大学",4  ],
  ["为什么普度大学被称为“航天员的摇篮”？","普度大学是NASA航天员训练的总部","普度大学有20多名校友是美国航天员","普度大学是全美第一所有机场的大学","普度大学飞行员专业全美排名第一",2  ],
  ["小明对计算机工程感兴趣，有优越的申请条件，他应该申请哪所学校？","哈弗大学","圣母大学","文理学院"," 卡内基梅陇大学",4  ],
  ["下列四所加州大学中，综合学术声誉最高的是哪一所？","UCB","UCLA","UCSB","UCSD",1  ],
  ["被称为常年Defer大校的是哪所学校？","凯斯西储大学","圣塞巴斯蒂安大学","加州大学洛杉矶分校","威斯康辛麦迪逊大学",1  ],
  ["主文书尽量避免的题材是什么？","个人对社会看法类文章","个人的成长和心路历程","体育类文章","体现个人失败并成长的文章",3  ]
]
    }
  },
  methods: {
    updateTime () {
      this.second++
      this.remSecond--
      if (this.remSecond == 10) {
        this.countdownAudio.currentTime = 0
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
        new Audio(audios.right).play()
        this.nextTi(true, false)
      } else {
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
