<template>
  <div>
    <div id="flutter-msg">Message from Flutter: {{msg}}</div><br>
    <input id="inputBox" v-model="inputMsg" placeholder="output to flutter">
    <p id="inputMsg">Input Message is: {{inputMsg}}</p>
    <button>click to open Flutter page</button>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  data(){
    return {
      msg: 'Hello!',
      inputMsg: ''
    }
  },
  mounted() {
    window.fromFlutter()
  },
  methods: {
    fromFlutter(location) {
      document.getElementById("flutter-msg").innerHTML = location;
    }
  }
}
</script>
<style scoped>

</style>