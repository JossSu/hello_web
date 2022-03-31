<template>
  <div>
    <div id="flutter-msg">從Flutter傳入的值: {{msg}}</div>
    <div>
      請輸入：<input v-model="inputMsg" placeholder="output to flutter">
    </div>
    <div>
      <p>欲傳給Flutter的值:<span>{{inputMsg}}</span></p>
    </div>
    <button @click="invokeNative">點擊傳值給Flutter</button><br>
    <button style="margin-top: 10px" @click="invokeNativeJump">點擊傳值給Flutter並且跳到指定頁面</button><br>
    <img style="width: 30px; padding-top: 30px" src="../assets/arrow_bottom.webp">
    <img style="width: 30px" src="../assets/arrow_top.webp">
    <img style="width: 30px" src="../assets/arrow_left.gif">
    <img style="width: 30px" src="../assets/arrow_right.gif">
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
    window.fromFlutter = this.fromFlutter
  },
  methods: {
    fromFlutter(location) {
      document.getElementById("flutter-msg").innerHTML = location;
    },
    invokeNative() {
      window['Toast'].postMessage(this.inputMsg);
    },
    invokeNativeJump() {
      window.location.href=`flutterweb://result?value=${this.inputMsg}`
    },
  }
}
</script>
<style scoped>
.flutter-msg {
  margin-bottom: 40px;
}
</style>