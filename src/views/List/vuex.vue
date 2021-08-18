<template>
  <div>
    <h3>
      获取状态值方法1
      {{ $store.state.htname }}
      <br>
      获取状态值方法2 使用钩子函数
      {{ht}}
      <br>
      监听
      {{hc}}
      <br>
    </h3>
    <br>
    <button @click="hscht">换诗词</button>
    <button @click="hschtAsync">一个月后换诗词</button>
    <button @click="doAjax">测试vuex中使用ajax</button>
  </div>
</template>

<script>
export default {
  name: "vuex",
  data(){
    return{
      ht:'',
    };
  },
  //使用钩子函数
  created(){
    this.ht=this.$store.state.hhname;
  },
  methods: {
    hscht() {
      this.$store.commit('sethtname',{
        htname:'一身诗意千寻普，万古人间四月天',
      });
    },
    // 异步
    hschtAsync() {
      this.$store.dispatch('sethtnameAsync',{
        htname:'世事一场大梦，人生几度秋凉',
      });
    },
    doAjax(){
      this.$store.dispatch('doAjax',{
        _this:this,
      });
    },
    },
    computed: {
      // 读取默认值
      hc() {
        // return this.$store.state.htname;   //不推荐这种方式
        return this.$store.getters.gethtname;
      }
    },
}
</script>

<style scoped>

</style>