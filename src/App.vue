<template>
  <div class="app">
    <superx></superx>
    <router-view></router-view>
  </div>
</template>

<script>
import superx from './components/superx'

export default {
  name: 'app',
  components: {
    superx
  },
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

<style lang="less">
  @import './styles/app';
</style>

<style lang="less" scoped>
  .app {
    .test {
      font-size: 20px;
      color: green;
    }
  }
</style>


