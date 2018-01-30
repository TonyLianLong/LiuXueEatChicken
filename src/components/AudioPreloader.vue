<template>
  <audio preload="auto">
    <source :src="filepath" :type="type">
  </audio>
</template>

<script>
export default {
  name: 'AudioPreloader',
  props: {
    filepath: String,
    type: {
      type: String,
      default: 'audio/mpeg'
    }
  }
}
</script>
<style scoped>
audio {
  display: none;
}
</style>
