<template>
  <div class="container">
    <div class="top">
      <ul>
        <li @click="goPage('member')">
          <div class="liRight">
            <h5>会员人数</h5>
            <span>{{ AllCount }}</span>
          </div>
          <div class="btLine">
            <em class="emlt">
              <i class="el-icon-caret-top"></i>
              今日新增 {{ NowCount }}
            </em>
            <em class="emrt">
              <i class="el-icon-caret-top"></i>
              昨日新增 {{ YesterdayCount }}
            </em>
          </div>
        </li>
        <li @click="goPage('record')">
          <div class="liRight">
            <h5>今日预约人数</h5>
            <span>{{ TodayOrderNum }}</span>
          </div>
          <div class="btLine">
            <em class="emlt">
              <i class="el-icon-caret-top"></i>
              昨日预约 {{ YestodayOrderNum }}
            </em>
            <em class="emrt">
              <i class="el-icon-caret-top"></i>
              较昨日新增 {{ TodayIncreaseNum }}
            </em>
          </div>
        </li>
        <li @click="goPage('lesson')" v-if="userLevel != 3">
          <div class="liRight">
            <h5>课程数量</h5>
            <span>{{ ClassNum }}</span>
          </div>
          <div class="btLine">
            <em class="emlt">
              <i class="el-icon-caret-top"></i>
              已预约课程 {{ TodayOrderSttNum }}
            </em>
          </div>
        </li>
        <li @click="goPage('lesson')">
          <div class="liRight">
            <h5>剩余课时</h5>
            <span>{{ TotalRemainNormalhour + TotalRemainGifthour }}</span>
          </div>
          <div class="btLine">
            <em class="emlt">
              <i class="el-icon-caret-top"></i>
              正常课时 {{ TotalRemainNormalhour }}
            </em>
            <em class="emlt">
              <i class="el-icon-caret-top"></i>
              赠送课时 {{ TotalRemainGifthour }}
            </em>
          </div>
        </li>
      </ul>
    </div>
    <div class="middle">
      <ve-histogram
          :data="chartData"
          height="350px"
          :legend-visible="false"
          :extend="chartExtend"
      ></ve-histogram>
    </div>
    <div class="bottom">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-card class="box-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLevel: localStorage.userLevel,
      isCollapse: document.body.clientWidth < 1367,
      AllCount: 0,
      YesterdayCount: 0,
      YestodayOrderNum: 0,
      NowCount: 0,
      CountAdd: 0,
      TodayIncreaseNum: 0,
      TodayOrderNum: 0,
      ClassNum: 0,
      TodayOrderSttNum: 0,
      TotalRemainNormalhour: 0,
      TotalRemainGifthour: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      editableTabsValue: "1",
      chartData: {
        columns: ["页面", "访问量"],
        rows: [
          {页面: 12, 访问量: 12},
          {页面: 12, 访问量: 12},
          {页面: 12, 访问量: 12},
          {页面: 31, 访问量: 31},
          {页面: 31, 访问量: 31},
          {页面: 31, 访问量: 31},
          {页面: 41, 访问量: 41},
          {页面: 41, 访问量: 41},
          {页面: 41, 访问量: 41},
          {页面: 22, 访问量: 11},
        ],
      },
      chartExtend: {
        color: ["#4ad2ff"],
        series: {
          barMaxWidth: 10,
        },
        axisLine: {
          color: "#4ad2ff",
        },
        yAxis: {
          // name : '单位: dB',
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#08255B"],
            },
          },
          axisLine: {
            lineStyle: {
              color: "#4ad2ff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#4ad2ff"],
            },
          },
          axisLine: {
            lineStyle: {
              color: "#4ad2ff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

em {
  font-style: normal;
}

.container {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  display: block;
  margin: 0 auto;
  padding-bottom: 60px;

  .top {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;

    li {
      width: 377px;
      height: 140px;
      float: left;
      border-radius: 12px;
      margin-right: 20px;
      cursor: pointer;
      color: #fff;

      &:nth-child(1) {
        background-color: #6DC1FF;
      }

      &:nth-child(2) {
        background-color: #d36dff;
      }

      &:nth-child(3) {
        background-color: #7acc4e;
      }

      &:nth-child(4) {
        background-color: #df0841;
        margin-right: 0;
      }

      img {
        float: left;
        margin-top: 17px;
        margin-left: 30px;
        margin-right: 24px;
      }

      .liRight {
        width: 200px;
        float: left;
        margin-top: 17px;
        padding-left: 50px;

        h5 {
          margin: 0;
          padding: 0;
          text-align: left;
        }

        span {
          width: 100%;
          overflow: hidden;
          display: block;
          margin: 0 auto;
          text-align: left;
          font-size: 26px;
          font-family: Arial;
          margin-top: 7px;
          margin-bottom: 20px;
        }

        em {
          font-size: 14px;
          text-align: right;
        }
      }
    }
  }
}


.btLine {
  width: 84%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  border-top: 1px solid #f0f2f5;
  padding-top: 17px;

  em {
    font-size: 14px;
  }

  .emlt {
    width: 50%;
    float: left;
    text-align: left;

    i {
      float: left;
    }
  }

  i {
    font-size: 18px;
    color: #bdbdbd;
  }
}

</style>
