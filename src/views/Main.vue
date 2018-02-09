<template>
  <div class="test-main">
    <div class="test-hello">
      <Button type="info" @click="addTwo">add</Button>
      {{ countOne }}
    </div>
    <div>{{ countTwo }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countOne: 100
    }
  },
  computed: {
    countTwo () {
      return this.$store.state.app.count
    }
  },
  mounted () {
    this.$store.commit('sayHelloApp')
    this.init()
  },
  methods: {
    init () {
    },
    addTwo () {
      this.$store.commit('increment', {amount: 10})
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
  .test-main {
    .test-hello {
      font-size: 20px;
      color: #ac0707;
    }
  }
</style>


