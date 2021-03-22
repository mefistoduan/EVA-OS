<template>
  <div class="container">
    <h5>this is grpc</h5>
    name : {{ name }}
    <br>
    message: {{ message }}
  </div>
</template>

<script>
// import {EchoRequest} from "@/assets/grpc/echo_pb";
// import {EchoServiceClient} from "@/assets/grpc/echo_grpc_web_pb";
import {SignInRequest, FlushDataRequest, Data} from "@/assets/grpcBack/grpcweb_pb";
// import {EchoServiceClient} from "@/assets/grpcBack/grpcweb_grpc_web_pb";
import {ApiClient} from "@/assets/grpcBack/grpcweb_grpc_web_pb";

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
    this.client = new ApiClient("http://192.168.0.57:18080", null, null);
    let text = "123"
    // let getRequest = new SignInRequest();
    // 对字符串进行编码
    // getRequest.setName(text);
    // let res = this.client.signIn(getRequest, {}, (err, response) => {
    //   console.log(response.getToken());
    //   this.message = response.getToken();
    // });


    let getRequest = new FlushDataRequest();
    getRequest.setName(text);
    let stream = this.client.flushData(getRequest, {
      token:1122334
    }, (err, response) => {
      console.log('连接出现问题 err:' + err);
      // that.grpcSrc = response
    });

    // 获取数据流
    stream.on('data', (response) => {
      that.name = response.getName();
      that.message = response.getHeartrate();
      console.log('已推送数据');
    });

    // 报错处理
    stream.on('error', (err) => {
      console.log('当前推送错误 err:' + err);
      console.log(`Unexpected stream error: code = ${err.code}` +
          `, message = "${err.message}"`);
    });

  },
  methods: {}
};
</script>

<style scoped>

</style>