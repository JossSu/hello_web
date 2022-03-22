<template>
  <div>
    <div>從Flutter傳入的值: <span class="flutter-msg">{{msg}}</span></div>
    <div>
      請輸入：<input v-model="inputMsg" placeholder="output to flutter">
    </div>
    <div>
      <p>欲傳給Flutter的值:<span>{{inputMsg}}</span></p>
    </div>
    <button @click="invokeNative">點擊傳值給Flutter</button><br>
    <button style="margin-top: 10px" @click="invokeNativeJump">點擊傳值給Flutter並且跳到指定頁面</button>
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
  },
  methods: {
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