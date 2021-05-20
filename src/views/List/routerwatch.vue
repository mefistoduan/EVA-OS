<template>
  <div>
    router watch
    <br>
    <el-button @click="gopage(1)">page 1</el-button>
    <el-button @click="gopage(2)">page 2</el-button>
    <el-button @click="reset()">reset</el-button>
    <br>
    dir:{{ dir }}
    block:{{block}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dir: 0,
      block: 1,
    }
  },
  watch: {
    $route() {
      this.dir = this.$route.query.dir || 0;
      this.block = this.$route.query.block || 1;
    },
  },
  methods: {
    gopage(i) {
      this.$router.push(
          {
            path: '/routerwatch', query: {dir: i,block:2}
          }
      );
    },
    reset() {
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