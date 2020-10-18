<template>
  <div class="context">
    <div class="panel">
      <h5>table</h5>
    </div>
    <div class="change">
      <el-button type="danger" @click="delList">删除</el-button>
    </div>
    <div class="table">
      <el-table
          :data="tableData"
          border
          is-horizontal-resize
          :default-sort="{prop: 'date', order: 'descending'}"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          class=""
          @selection-change="handleSelectionChange"
      >
        >
        <el-table-column label="选择" width="55">
          <template slot-scope="scope">
            <el-radio v-model="tableRadio" :label="scope.row"><i></i></el-radio>
          </template>
        </el-table-column>
        <el-table-column
            type="index"
            label="序号"
            align="center"

            width="50">
        </el-table-column>
        <el-table-column
            prop="EndTime"
            label="下课时间"
            :formatter="filterFmtDate"
        >
        </el-table-column>
        <el-table-column
            prop="ClassName"
            label="课程"
            sortable
        >
          <template slot-scope="scope">
                        <span class="lessonSpan"
                              :style="{background:scope.row.ClassColor}">{{ scope.row.ClassName }}</span>
          </template>
        </el-table-column>
        <el-table-column
            prop="ConsumeHour"
            label="消耗课时"
            sortable
        >
        </el-table-column>
        <el-table-column
            prop="Status"
            label="操作"
        >
          <template slot-scope="scope">
            <el-button type="primary" round size="mini" @click="checkClassOverPrepare(scope.row)">
              下课
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination
          background
          :total="pageination.total"
          :page-size="pageination.pageItem"
          @current-change="pageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Global from '../Global.js'
import {
  TestClassPreFinishListQuery,
  ClassOverPrepare,
} from "../api/getApiRes";

let qs = require('qs');
export default {
  data() {
    return {
      tableRadio: [],
      dialogVisible: false,//其他dialog
      dialogFinishVisible: false,//确认下课dialog
      dialogLesson: false,//课时调整
      dialogGift: false,//赠送课时调整
      dialogExpTime: false,//有效期调整
      dialogLessonTable: false,//会员课程
      dialogTitle: '',
      dialogValue: [],
      // panel 配置项目
      panel: {
        usercode: '',
        username: '',
        compname: '',
        keyword: '',
        USERCODE: '',
        endType: '',
        taskstatus: 99,
        draw: 1,
        start: 0,
        recordsTotal: 0,
        tableData: [],
        allTableData: [],
        limit: '10',
        multipleSort: false,
        loading: false,
        fileList: [],
        multipleSelection: [],
        detectedmac: '',
        options: [
          {value: 99, label: '全部'},
          {value: 1, label: '进行中'},
          {value: 2, label: '已完成'},
        ],
        endTypeOptions: [
          {value: 99, label: '全部'},
          {value: 30, label: '近一个月'},
          {value: 7, label: '近一周'},
          {value: 1, label: '当日'},
        ],
        time1: globalBt(),
      },
      multipleSelection: [],
      pageination: {
        pageItem: 100,
        pageoptions: pageOptions(),
        total: 100,
        pageIndex: 1,
      },
      form: {
        name: '',
        userCode: '',
        coach: '',
        coachOptions: [],
        shopId: '',
        memberType: 1,
        lesson: 1,
        gift: 1,
        btnType: 0,//0新建，1编辑编辑
        memo: '',
        expTime: '',
        dialogdata: [],//穿梭待选
        dialogValue: [],//穿梭已选
      },
      memberTypes: [
        {value: 1, label: '年会员'},
        {value: 2, label: '充值会员'},
      ],
      tableData: []
    }
  },
  mounted() {
    this.getTableQuery();
  },
  methods: {
    // 删除
    delList() {
      let that = this;
      if (this.tableRadio.length == 0) {
        this.$message.error("请先选中一条记录");
        return false
      }
      let row = that.tableRadio;
      let param = {
        token: localStorage.token,
        classId: row.id,
        status: 9,//0禁用1启用9删除
      };
      let postdata = qs.stringify(param);

      this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ClassStatusEdit(postdata).then(res => {
          let json = res;
          if (json.Code == 0) {
            that.$message({
              showClose: true,
              message: '选中的课程已删除！',
              type: 'success'
            });
            // 重载列表
            that.getTableQuery();
          } else {
            that.$message.error(json.Memo);
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 检测当前课是否处于可改变状态
    checkClassOverPrepare(row) {
      let that = this;
      let param = {
        token: localStorage.token,
        stdId: row.StdId,
      };
      let postdata = qs.stringify(param);
      ClassOverPrepare(postdata).then(res => {
        let json = res;
        if (json.Code == 0) {
          that.goFinish(row);
        } else {
          that.$message.error(json.Memo);
        }
      })
    },
    goFinish(row) {
      this.$router.push({
        path: '/finishDetail', query: {
          id: row.StdId,
          classId: row.ClassId,
          ClassName: row.ClassName,
          BeginTime: row.BeginTime,
        }
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 页面数据查询
    getTableQuery() {
      let that = this;
      that.loading = true;
      let param = {
        token: localStorage.token,
        tagname: that.panel.tagname,//标签名
        start: 1,//
        tableMax: 9999,//
      };
      let postdata = qs.stringify(param);
      TestClassPreFinishListQuery(postdata).then(res => {
        let json = res;
        if (json.Code == 0) {
          that.loading = false;
          if (json.Rs) {
            that.allTableData = json.Rs;
            that.recordsTotal = json.Rs.length;
          } else {
            that.allTableData = [];
            that.recordsTotal = 0;
          }

          // 设置分页数据
          that.setPaginations();
        } else {
          that.$message.error(json.Memo);
        }
      })
    },
    // 设置分页数据
    setPaginations() {
      // 分页属性
      let that = this;
      that.pageination.total = that.recordsTotal;

      // 默认分页
      that.tableData = that.allTableData.filter((item, index) => {
        return index < that.pageination.pageItem;
      });
    },
    // 每页显示数量
    handleSizeChange() {
      let that = this;
      that.tableData = that.allTableData.filter((item, index) => {
        return index < that.pageination.pageItem;
      });
      that.draw = that.pageination.pageItem;
      that.getTableQuery();
    },
    // 翻页
    pageChange(pageIndex) {
      let that = this;
      // 获取当前页
      let index = that.pageination.pageItem * (pageIndex - 1);
      // 数据总数
      let nums = that.pageination.pageItem * pageIndex;
      // 容器
      let tables = [];
      for (var i = index; i < nums; i++) {
        if (that.allTableData[i]) {
          tables.push(that.allTableData[i])
        }
        this.tableData = tables;
      }
      that.start = index * that.draw;
      that.getTableQuery();
    },
    // 过滤时间
    filterFmtDate(value, row, column) {
      let that = this;
      return nonTfmtDate(column, 11);
    },
  },
  watch: {
    $route(to) {
      if (to.name == 'finish') {
        this.getTableQuery();
      }
    },
  },
}
</script>

<style scoped>
@import "../assets/css/panel.css";

.context {
  height: 770px;

  overflow-y: scroll;
  display: block;
  margin: 0 auto;
  background-color: #fff !important;
  padding: 30px;
}

.panel-body {
  padding: 20px;
  background: #F0F2F5;
}

.change {
  width: 100%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

.change button {
  float: left;
}

.change button.pull-right {
  float: right;
}

.dialogTitle {
  width: 100%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  color: #000000;
  font-size: 18px;
  text-align: center;
}

.dialogTitle em {
  float: none;
  font-style: normal;
  color: #3799FF;
  margin: 0;
}

/deep/ .el-transfer-panel__item .el-checkbox__input {
  left: 40px;
}

.dialogFooter {
  width: 90%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}

.dialogFooter button {
  float: right;
  margin-left: 10px;
}

.dialogContent {
  width: 100%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
}

.dialogContent .pull-left {
  width: 30%;
  float: left;
}

.dialogContent .pull-right {
  width: 70%;
  float: right;
}

.blueTitle {
  width: 200px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 40px;
  background: #F0F2F5;
  border-radius: 19px;
  text-align: center;
  color: #3799FF;
  font-size: 16px;
  padding: 5px 24px;
}

.current {
  width: 158px;
  height: 23px;
  /*float: left;*/
  border-radius: 250px;
  text-align: center;
  background: #F0F2F5;
  color: #545454;
  font-size: 14px;
  padding: 3px 10px;
  margin-left: 20px;
}

.lessonSpan {
  width: 78px;
  height: 22px;
  border-radius: 11px;
  margin-right: 5px;
  float: left;
  margin-bottom: 3px;
  text-align: center;
  color: #000;
  font-size: 12px;
}
</style>
