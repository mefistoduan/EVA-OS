#readme

##生成服务

执行gen.bat 重新生成服务文件


### 使用

import {SignInPasswordRequest, FlushDataRequest, Data} from "@/assets/grpcBack/im_pb";
//｛｝内容为传入参数的方法名，按实际需求添加

import {ApiClient} from "@/assets/grpcBack/im_grpc_web_pb";
// 固定内容无需修改

[comment]: <> (function)
let that = this;
this.client = new ApiClient("http://192.168.0.3:20010", null, null);
//端口地址

let pwdtext = "asdf*123"
let authtext = "admin"
let getRequest = new SignInPasswordRequest();
// 报文内容和方法，方法取自im.proto文件 rpc  rpc SignInUserCode (SignInPasswordRequest) returns (TokenParam)  {}

getRequest.setPassword(pwdtext);
getRequest.setAuth(authtext);
getRequest.setExpirationsec(10000);
// 对报文内容字符串进行编码 ，setXXX方法取自im.proto文件 message SignInPasswordRequest { ... ，内部属性要加set前缀字


let res = this.client.signInUserCode(getRequest, {}, (err, response) => {
//接口名取自im.proto文件  rpc  rpc SignInUserCode (SignInPasswordRequest) returns (TokenParam)  {}
this.message = response.getToken();
//回调方法名取自im.proto文件  rpc SignInUserCode (SignInPasswordRequest) returns (TokenParam)  {} 的TokenParam返回值，
//内部属性要加get前缀字
});

//****注意，加前缀子的编码方法和回调方法的大小写请逐一在im_grpc_web_pb.js文件中核对，转换规则一般是小驼峰书写。