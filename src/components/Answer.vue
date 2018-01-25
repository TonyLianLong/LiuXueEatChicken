<template>
  <div id="box">
    <h1>挑战者：AQ</h1>
    <div id="sec-col">
      <div id="used-sec">已用 {{second}} 秒</div>
      <div id="ti-num">答对 {{ti}} 题</div>
    </div>
    <div id="question">
      {{question}}
    </div>
    <div v-for="(answer, index) in answers" class="answer" @click="clickAnswer(index)" :key="index">
      {{answer}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  mounted () {
    setInterval(this.updateTime, 1000)
  },
  data () {
    return {
      second: 0,
      ti: 0,
      question: "Panopath的中文名是？",
      answers: ["过来人","来过人","来来人","过人"],
      correct: 0
    }
  },
  methods: {
    updateTime () {
      this.second++
    },
    clickAnswer (ansNum) {
      console.log(ansNum, this.correct)
      if( ansNum == this.correct ){
        console.log("correct");
      }else{
        console.log("not right");
        this.$router.go('/result')
      }
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
  height: 40px;
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
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
}
.answer {
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 10px;
  border: solid #F3E2D9;
  color: #A51A2A;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.answer:active {
  background-color: #F3E2D9;
}
#box{
  color: #C21529;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
