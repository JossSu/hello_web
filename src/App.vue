<template>
  <div>
    <div id="flutter-msg">從Flutter傳入的值: {{msg}}</div>
    <div>
      請輸入：<input id="inputBox" v-model="inputMsg" placeholder="output to flutter">
    </div>
    <div>
      <p>欲傳給Flutter的值:<span id="inputMsg">{{inputMsg}}</span></p>
    </div>
    <button @click="invokeNative">點擊傳值給Flutter</button><br>
    <!--    <router-link to="http://youtube.com.tw">-->
    <button style="margin-top: 10px" @click="invokeNativeJump">點擊傳值給Flutter並且跳到指定頁面</button>
    <!--    </router-link>-->
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
      this.$router.push('flutterweb://result?value=cool')
    },
  }
}
</script>
<style scoped>
#flutter-msg {
  margin-bottom: 40px;
}
</style>