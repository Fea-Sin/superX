<template>
  <div class="app">
    <div class="test">this come from app</div>
    <Button type="info">hello world</Button>
    <div class="abc">
      <div class="ef">123456</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(function() {
      console.log('DOM 挂载之后')
    })
  },
  beforeDestroy () {

  },
  methods: {
    init () {
      this.$router.push({ name: 'mainPage' })
    }
  },
  created () {
    console.log('app created')
    this.init()
  }
}
</script>

<style lang="less" scoped>
  .app {
    .test {
      font-size: 20px;
      color: green;
    }
  }
</style>


