<template>
  <div>
    <h1>挑战者：AQ</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
  font-size: 50px;
  text-align: center;
}
</style>
