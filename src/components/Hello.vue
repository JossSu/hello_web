<template>
  <div>
    <div id="flutter-msg">從Flutter傳入的值: {{msg}}</div>
    <div>
      請輸入：<input id="inputBox" v-model="inputMsg" placeholder="output to flutter">
    </div>
    <p id="inputMsg">欲傳給Flutter的值: {{inputMsg}}</p>
    <button>點擊傳值給Flutter</button>
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
#flutter-msg {
  margin-bottom: 40px;
}
</style>