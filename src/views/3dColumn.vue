<template>
  <div id="app">
    <h2>  3d 柱状图</h2>
    <iframe id="iframe" src="static/terms.html" frameborder="0" />
  </div>
</template>


<script>

export default {
  name: 'App',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods:{
    init: function () {
    },
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#iframe {
  width: 100%;
  height: 670px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
}
</style>

