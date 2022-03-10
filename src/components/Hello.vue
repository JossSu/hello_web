<template>
  <div>
    <div id="flutter-msg">從Flutter傳入的值: {{msg}}</div>
    <div>
      請輸入：<input id="inputBox" v-model="inputMsg" placeholder="output to flutter">
    </div>
    <div>
      <p>欲傳給Flutter的值:<span id="inputMsg">{{inputMsg}}</span></p>
    </div>
    <button @click="invokeNative">點擊傳值給Flutter</button>
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
    },
    invokeNative() {
      window['Toast'].postMessage('Trigger from Javascript code');
    }
  }
}
</script>
<style scoped>
#flutter-msg {
  margin-bottom: 40px;
}
</style>