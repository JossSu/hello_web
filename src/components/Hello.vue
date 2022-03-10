<template>
  <div>
    <div id="flutter-msg">{{msg}}</div>
    <button>click</button>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  data(){
    return {
      msg: 'Hello!'
    }
  },
  mounted() {
    this.fromFlutter()
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