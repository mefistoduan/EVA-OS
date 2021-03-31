<template>
  <div class="container">
    <h5>this is grpc</h5>
    name : {{ name }}
    <br>
    message: {{ message }}
  </div>
</template>

<script>
import {SignInPasswordRequest, FlushDataRequest, Data} from "@/assets/grpcBack/im_pb";
import {ApiClient} from "@/assets/grpcBack/im_grpc_web_pb";

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      inputField: "",
      name: "",
      message: "",
      grpcSrc: null,
      todos: []
    };
  },

  created: function () {
    let that = this;
    this.client = new ApiClient("http://192.168.0.3:20010", null, null);
    let pwdtext = "asdf*123"
    let authtext = "admin"
    let getRequest = new SignInPasswordRequest();
    // 对字符串进行编码
    getRequest.setPassword(pwdtext);
    getRequest.setAuth(authtext);
    getRequest.setExpirationsec(10000);
    let res = this.client.signInUserCode(getRequest, {}, (err, response) => {
      this.message = response.getToken();
    });


    // let getRequest = new FlushDataRequest();
    // getRequest.setName(text);
    // let stream = this.client.flushData(getRequest, {
    //   token:1122334
    // }, (err, response) => {
    //   console.log('连接出现问题 err:' + err);
    //   // that.grpcSrc = response
    // });

    // // 获取数据流
    // stream.on('data', (response) => {
    //   that.name = response.getName();
    //   that.message = response.getHeartrate();
    //   console.log('已推送数据');
    // });
    //
    // // 报错处理
    // stream.on('error', (err) => {
    //   console.log('当前推送错误 err:' + err);
    //   console.log(`Unexpected stream error: code = ${err.code}` +
    //       `, message = "${err.message}"`);
    // });

  },
  methods: {}
};
</script>

<style scoped>

</style>