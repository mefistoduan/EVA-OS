<template>
  <div class="timePart">
    <div class="lt">
      <h5>活动限界 <s>ACTIVE RANGE</s></h5>
      <P>{{ time }}</P>
      <span>{{ percent }}%</span>
      <ul>
        <li>
          <em>STOP</em>
          <i v-if="i == 1"></i>
        </li>
        <li>
          <em>SLOW</em>
          <i v-if="i == 2"></i>
        </li>
        <li>
          <em>NORMAL</em>
          <i v-if="i == 3"></i>
        </li>
        <li>
          <em>RACING</em>
          <i v-if="i == 4"></i>
        </li>
      </ul>
    </div>
    <div class="rt">
      <div class="top">
        <h5>内部</h5>
        <s>INTERNAL</s>
        <i v-if="type"></i>
      </div>
      <div class="middle">
        <span>主电源供给</span>
        <s>MAIN POWER SUPPLE</s>
      </div>
      <div class="bottom">
        <h5>外部</h5>
        <s>EXTERNAL</s>
        <i v-if="!type"></i>
      </div>
    </div>
  </div>
</template>

<script>
import global from "../Global";

export default {
  data() {
    return {
      i: 1,
      type: true,
      time: "8:88:88",
      percent: "00",
    };
  },
  mounted() {
    this.mockDate();
    this.timer = setInterval(() => {
      this.mockDate();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    mockDate() {
      this.time = globalcurrentTime();
      this.percent = (Math.random(0, 100) * 100).toFixed(0);
      this.type = !this.type;
      this.i = parseInt(Math.random(1, 4) * 10);
    },
  },
};
</script>


<style lang="scss" scoped>

@mixin cube {
  width: 100%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
}


ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

em,
s,
i {
  font-style: normal;
  text-decoration: none;
}

.timePart {
  width: 400px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: 0 auto;

  .lt {
    width: 300px;
    overflow: hidden;
    float: left;

    h5 {
      @include cube;
      font-size: 14px;
      font-weight: normal;
      color: #01355b;
      text-align: left;
    }

    s {
      font-size: 14px;
    }

    p {
      @include cube;
      font-size: 65px;
      color: #01355b;
      text-align: left;
      font-family: UniDreamLED;
      letter-spacing: 6px;
      margin-top: 3px;
      margin-bottom: 3px;
    }

    span {
      @include cube;
      font-size: 14px;
      text-align: right;
      font-family: UniDreamLED;
    }

    ul {
      @include cube;

      li {
        width: 24.3%;
        height: 40px;
        background: #01355b;
        color: #fff;
        text-align: center;
        float: left;
        margin-right: 2px;
        font-size: 14px;
        padding-top: 12px;
        padding-bottom: 12px;

        &:nth-child(4) {
          margin-right: 0;
        }

        i {
          width: 90%;
          overflow: hidden;
          display: block;
          margin: 0 auto;
          margin-top: 12px;
          height: 12px;
          background: #fff;
        }

      }

    }
  }

  .rt {
    width: 100px;
    overflow: hidden;
    float: right;

    .top {
      width: 100%;
      height: 50px;
      overflow: hidden;
      display: block;
      margin: 0 auto;
      background: #01355b;
      color: #fff;

      h5 {
        width: 40px;
        font-size: 20px;
        margin: 0;
        float: left;
        text-align: left;
        padding-left: 20px;
      }

      s {
        float: left;
        font-size: 0.8px;
        text-align: left;
        padding-left: 1.2px;
      }

      i {
        position: relative;
        top: -20px;
        right: 10px;
        float: right;
        width: 15px;
        height: 30px;
        background: linear-gradient(
                135deg,
                #fff 25%,
                #005ea2 0,
                #005ea2 50%,
                #fff 0,
                #fff 75%,
                #005ea2 0
        );
        background-size: 12px 12px;
      }
    }

    .middle {
      @include cube;
      margin-top: 5px;
      margin-bottom: 6px;
      background: #01355b;
      color: #fff;
      padding-top: 8px;
      padding-bottom: 8px;

      span {
        @include cube;
        font-size: 14px;
        text-align: left;
        padding-left: 10px;
      }

      s {
        @include cube;
        font-size: 12px;
      }
    }

    .bottom {
      width: 100%;
      height: 50px;
      overflow: hidden;
      display: block;
      margin: 0 auto;
      background: #01355b;
      color: #fff;
      padding-top: 3px;
      padding-bottom: 3px;

      s {
        float: left;
        font-size: 12px;
        text-align: left;
        padding-left: 20px;
        font-size: 12px;
      }
    }

    h5 {
      width: 80px;
      font-size: 24px;
      margin: 0;
      float: left;
      text-align: left;
      padding-left: 20px;
    }

    i {
      position: relative;
      top: -20px;
      right: 10px;
      float: right;
      width: 15px;
      height: 30px;
      background: linear-gradient(
              135deg,
              #fff 25%,
              #005ea2 0,
              #005ea2 50%,
              #fff 0,
              #fff 75%,
              #005ea2 0
      );
      background-size: 12px 12px;
    }
  }
}

</style>
