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
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
    };
  },
  components: {},
};
</script>

<style scoped>
.top .grid-content {
  width: 90%;
  height: 100px;
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
