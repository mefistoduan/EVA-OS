<template>
  <div class="container">
    <h5>this is grpc</h5>
    {{ message }}
    <!--  <iframe src="static/grpc/index.html" frameborder="0" width="100%" height="300px"></iframe>-->
  </div>
</template>

<script>
import {EchoRequest} from "@/assets/grpc/echo_pb";
import {EchoServiceClient} from "@/assets/grpc/echo_grpc_web_pb";

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      inputField: "",
      message: "",
      todos: []
    };
  },

  created: function () {
    this.client  = new EchoServiceClient("http://grpctest", null, null);
    let getRequest = new EchoRequest();
    let text = "11"
    // 对字符串进行编码
    getRequest.setMessage(text);
    let res = this.client.echo(getRequest, {}, (err, response) => {
      console.log(response.getMessage());
    });
    // this.getTodos();
  },
  mounted() {
  },
  methods: {
    async  getTodos() {
      let getRequest = new EchoRequest();
      getRequest.setMessage("11");
      let res = await  this.client.echo(getRequest, {}, (err, response) => {
        console.log(err);
        console.log(response);
      });
    },
  }
};
</script>

<style scoped>

</style>