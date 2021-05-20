<template>
  <div>
    router watch
    <br>
    <el-button @click="gopage(1)">page 1</el-button>
    <el-button @click="gopage(2)">page 2</el-button>
    <el-button @click="reset()">reset</el-button>
    <br>
    dir:{{ dir }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dir: 0
    }
  },
  watch: {
    $route() {
      console.log('this.$route.query.dir', this.$route.query.dir)
      this.dir = this.$route.query.dir || 0;
    },
    dir() {
    },
  },
  methods: {
    gopage(i) {
      this.$router.push(
          {
            path: '/routerwatch', query: {dir: i}
          }
      );
    }, reset() {
      this.$router.push(
          {
            path: '/routerwatch', query: {}
          }
      );
    },
  },
}
</script>

<style scoped>

</style>