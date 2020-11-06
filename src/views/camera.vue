<template>
  <div class="camera_outer">
    <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay v-show="true"></video>
    <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
    <canvas id="actions" :width="videoWidth" :height="videoHeight"></canvas>
    <div class="button">
      <el-button @click="getCompetence()">打开摄像头</el-button>
      <el-button @click="stopNavigator()">关闭摄像头</el-button>
      <!--      <el-button @click="setImage()">拍照</el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoWidth: 450,
      videoHeight: 300,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo: false,
    };
  },
  mounted() {
    this.getCompetence()//进入页面就调用摄像头
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence() {
      let that = this;
      that.thisCancas = document.getElementById("canvasCamera");
      that.thisContext = this.thisCancas.getContext("2d");
      that.thisVideo = document.getElementById("videoCamera");
      // that.thisVideo.style.display = 'block';
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {//不存在则报错
            return Promise.reject(
                new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      let constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function (stream) {
            // 旧的浏览器可能没有srcObject
            if ("srcObject" in that.thisVideo) {
              that.thisVideo.srcObject = stream;
            } else {
              // 避免在新的浏览器中使用它，因为它正在被弃用。
              that.thisVideo.src = window.URL.createObjectURL(stream);
            }
            that.thisVideo.onloadedmetadata = function (e) {
              that.thisVideo.play();
            };
          })
          .catch(err => {
            console.log(err);
          });

      // 定时截图
      that.timer = setInterval(() => {
        this.initCanvas();
      }, 66); //30fps

    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop();
    },
    // 生成测试数据
    creatDate() {
      let x = parseInt(Math.random() * 50 + 1);
      let y = parseInt(Math.random() * 50 + 1);
      let z = parseInt(Math.random() * 50 + 1);
      console.log(x);
      // json 顺序 头 颈 身
      let json = [{x: x, y: 20}, {x: y, y: 60}, {x: z, y: 120}];
      return json;
    },
    initCanvas() {
      let canvas = document.getElementById("actions");
      let ctx = canvas.getContext('2d');
      let json = this.creatDate()
      // 清掉页面内容
      ctx.clearRect(0, 0, this.videoWidth, this.videoHeight)
      // 绘制每帧骨架
      this.drawSmile(ctx, json);

    },
    drawSmile(ctx, json) {
      ctx.beginPath();
      ctx.strokeStyle = "#ff3300";
      for (let i = 0; i < json.length; i++) {
        ctx.arc(json[i].x, json[i].y, 10, 0, Math.PI * 2, true); // 绘制
      }
      ctx.stroke();
    },
    // base64转文件，此处没用到
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type: mime});
    }
  }
}
</script>

<style scoped>
#actions {
  position: relative;
  top: 0;
  left: -450px;
  /*background: rgba(154,21,14,0.3);*/
  z-index: 222;
}
</style>