<template>
  <div class="landing">
    Hi {{input}}, <br>How's your day?
  </div>
</template>
<script>
export default {
  name: 'Landing',
  data() {
    return {
      input: this.$route.query.input
    }
  },
  // mounted() {
  //   console.log('route', this.$route.query.input)
  // }
}
</script>
<style scoped>
.landing {
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  font-size: 30px;
}
</style>