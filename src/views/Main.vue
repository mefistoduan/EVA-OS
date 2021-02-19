<template>
  <div class="container">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content">
            <i class="el-icon-user"></i>
            <h5>今日新增</h5>
            <span>231</span>
          </div></el-col
        >
        <el-col :span="6">
          <div class="grid-content">
            <i class="el-icon-user"></i>
            <h5>今日新增</h5>
            <span>231</span>
          </div></el-col
        >
        <el-col :span="6">
          <div class="grid-content">
            <i class="el-icon-user"></i>
            <h5>今日新增</h5>
            <span>231</span>
          </div></el-col
        >
        <el-col :span="6">
          <div class="grid-content">
            <i class="el-icon-user"></i>
            <h5>今日新增</h5>
            <span>231</span>
          </div></el-col
        >
      </el-row>
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
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>
                清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
              </div>
              <div>
                帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          { 页面: 12, 访问量: 12 },
          { 页面: 12, 访问量: 12 },
          { 页面: 12, 访问量: 12 },
          { 页面: 31, 访问量: 31 },
          { 页面: 31, 访问量: 31 },
          { 页面: 31, 访问量: 31 },
          { 页面: 41, 访问量: 41 },
          { 页面: 41, 访问量: 41 },
          { 页面: 41, 访问量: 41 },
          { 页面: 22, 访问量: 11 },
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

<style scoped>
.top .grid-content {
  width: 90%;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px 20px;
}
.top h5 {
  font-size: 18px;
  float: right;
  text-align: right;
  margin: 0;
}
.top i {
  font-size: 18px;
  float: left;
}
.top span {
  width: 100%;
  float: right;
  display: block;
  margin: 0 auto;
  text-align: right;
  font-size: 40px;
}
</style>
