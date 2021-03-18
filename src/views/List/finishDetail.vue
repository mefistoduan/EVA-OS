<template>
    <div class="context">
        <div class="panel">
            <h5>下课详情
                <span class="current">{{BeginTime}} {{ClassName}} </span>
            </h5>
            <div class="panel-body">
                <div class="panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <em>会员名:</em>
                            <el-input v-model="panel.name" placeholder="请输入会员名"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <em>手机号:</em>
                            <el-input v-model="panel.phone" placeholder="请输入手机号"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button size="" type="primary" @click="query" plain>查询</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="change">
            <el-button @click="addFinish">确认下课</el-button>
            <el-button @click="addFinishMember">添加下课会员</el-button>
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
                <el-table-column
                        type="index"
                        label="序号"
                        align="center"

                        width="50">
                </el-table-column>
                <el-table-column
                        prop="Name"
                        label="会员名"
                >
                </el-table-column>
                <el-table-column
                        prop="Phone"
                        label="手机号"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="ClassName"
                        label="课程"
                        sortable
                >
                    <template slot-scope="scope">
                        <span class="lessons" :style="{ background:scope.row.ClassColor }">{{scope.row.ClassName}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="OrderTime"
                        label="预约时间"
                        :formatter="filterFmtDate"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="RemainTotalhour"
                        label="剩余全部课时"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="Status"
                        label="状态"
                        sortable
                >
                    <template slot-scope="scope">
                        <span v-if="scope.row.Status == 1">预约上课 </span>
                        <span v-if="scope.row.Status == 2">预约未到</span>
                        <span v-if="scope.row.Status == 3">上课未预约</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="Status"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-button type="primary" round v-if="scope.row.Status == 1" size="mini"
                                   @click="pauseRow(scope.row,2)">
                            预约未到
                        </el-button>
                        <el-button type="warning" round v-if="scope.row.Status == 2" size="mini"
                                   @click="pauseRow(scope.row,1)">
                            撤销
                        </el-button>
                        <el-button type="danger" round v-if="scope.row.Status == 3" size="mini"
                                   @click="getClassOverDetailDel(scope.row)">
                            删除
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

        <el-dialog title="确认下课" :visible.sync="dialogFinishVisible" width="650px">
            <div class="dialogContent">
                <span class="blueTitle">{{ClassName}} {{BeginTime}}</span>
                <div>
                    <el-transfer filterable v-model="dialogCoachValue" :data="form.dialogCoachdata"
                                 :titles="['教练列表', '已添加教练']"></el-transfer>
                </div>
            </div>
            <div class="dialogFooter">
                <el-button type="primary" size="small" @click="confirmClassFinish">确定</el-button>
                <el-button size="small" @click="dialogFinishVisible = false">取消</el-button>
            </div>
        </el-dialog>

        <el-dialog title="添加下课会员" :visible.sync="dialogVisible" width="650px">
            <div class="dialogContent viplist">
                <span class="blueTitle">{{ClassName}} {{BeginTime}}</span>
                <div>
                    <el-transfer filterable v-model="dialogValue" :data="form.dialogdata"
                                 :titles="['会员列表', '已添加会员']"></el-transfer>
                </div>
            </div>
            <div class="dialogFooter">
                <el-button type="primary" size="small" @click="confirmMember">确定</el-button>
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import Global from '../../Global.js'
    import {
        ClassOverDetailListQuery,
        ClassVipuserQuery,
        ClassOverDetailAdd,
        ClassVipuserEdit,
        ClassOverDetailStatusEdit,
        ClassOverConfirm,
        testTable,
        testSelect,
        TeacherListQuery,
        ShopManagerListQuery,
        VipUserSimpleQuery,
        ClassOverDetailDel
    } from "../../api/getApiRes";

    let qs = require('qs');
    export default {
        data() {
            return {
                dialogVisible: false,//添加下课会员
                dialogFinishVisible: false,//确认下课dialog
                dialogLesson: false,//课时调整
                dialogGift: false,//赠送课时调整
                dialogExpTime: false,//有效期调整
                dialogLessonTable: false,//会员课程
                dialogTitle: '新增会员',
                current: getNowDate(),
                dialogValue: [],
                dialogCoachValue: [],
                BeginTime: '',
                ClassName: '',
                // panel 配置项目
                panel: {
                    name: '',
                    phone: '',
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
                    dialogCoachdata: [],//穿梭已选
                },
                memberTypes: [
                    {value: 1, label: '年会员'},
                    {value: 2, label: '充值会员'},
                ],
                tableData: []
            }
        },
        mounted() {
            this.BeginTime = nonTfmtDatetoLength(this.$route.query.BeginTime, 16);
            this.ClassName = this.$route.query.ClassName;
            // this.getTableQuery();
            // 获取教练选项
            // this.getCoachOption();
        },
        methods: {
            // 获取教练选项
            getCoachOption() {
                let that = this;
                let param = {
                    token: localStorage.token,
                    name: this.panel.name,//
                    phone: this.panel.phone,//
                    shopId: localStorage.ShopId,//
                    adminType : 4,//
                    start : 1,//
                    tableMax  : 299,//
                };
                let postdata = qs.stringify(param);
                ShopManagerListQuery(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.form.dialogCoachdata = turnResToOptionByUsers(json.Rs);
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 获取本课程下的会员列表
            getClassVipuserQuery() {
                let that = this;
                let param = {
                    token: localStorage.token,
                    // classId: this.$route.query.classId,
                };
                let postdata = qs.stringify(param);
                // ClassVipuserQuery(postdata).then(res => {
                VipUserSimpleQuery(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        // that.form.dialogdata = turnResToOptionByViper(json.Rs);
                        that.form.dialogdata = turnResToOptionBySimViper(json.Rs);
                        console.log(that.form.dialogdata);
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 下课记录详情删除
            getClassOverDetailDel(row) {
                let that = this;
                let param = {
                    token: localStorage.token,
                    stdId: row.StdId,
                    cfId: row.CfId,
                };
                this.$confirm('是否删除用户  ' + row.Name + '  的下课记录？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let postdata = qs.stringify(param);
                    ClassOverDetailDel(postdata).then(res => {
                        let json = res;
                        if (json.Code == 0) {
                            that.$message({
                                showClose: true,
                                message: '当前学生上课记录已删除！',
                                type: 'success'
                            });
                            that.getTableQuery();
                        } else {
                            that.$message.error(json.Memo);
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // 编辑
            editMember(row) {
                let that = this;
                this.clearForm();

                this.form.userCode = row.userCode;
                this.form.name = row.name;
                this.form.memberType = row.vipType;
                this.form.lesson = row.Recovered;
                this.form.gift = row.Recovered;
                this.form.memo = row.memo;
                this.form.btnType = 1;

                this.form.shopId = row.Id;
                this.dialogFinishVisible = true
                this.dialogTitle = '编辑会员'

            },
            // 禁用
            pauseRow(row, status) {
                let that = this;
                let param = {
                    token: localStorage.token,
                    stdId: this.$route.query.id,
                    cfId: row.CfId,
                    status: status,
                };
                let postdata = qs.stringify(param);
                ClassOverDetailStatusEdit(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.$message({
                            showClose: true,
                            message: '执行成功！',
                            type: 'success'
                        });
                        // table 重载
                        that.getTableQuery();
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 关闭所有
            allDialogClose() {
                this.dialogVisible = false;
                this.dialogGift = false;
                this.dialogLesson = false;
                this.dialogExpTime = false;
                this.dialogLessonTable = false;
            },
            // 确认提交下课会员
            confirmMember() {
                let that = this;
                // checkNum
                let userlist = that.dialogValue.toString();
                let param = {
                    token: localStorage.token,
                    stdId: this.$route.query.id,
                    userlist: userlist
                };
                let postdata = qs.stringify(param);
                // 下课记录详情添加
                ClassOverDetailAdd(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        // 关闭弹窗
                        that.dialogVisible = false;
                        // 重载列表
                        that.getTableQuery();
                        that.$message({
                            showClose: true,
                            message: '下课会员修改成功！',
                            type: 'success'
                        });
                        that.getTableQuery()
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 确认下课
            confirmClassFinish() {
                let that = this;
                // checkNum
                let userlist = that.dialogCoachValue.toString();
                let param = {
                    token: localStorage.token,
                    stdId: this.$route.query.id,
                    teacherList: userlist
                };
                let postdata = qs.stringify(param);
                // 下课记录详情添加
                ClassOverConfirm(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        // 关闭弹窗
                        that.dialogFinishVisible = false;
                        // 重载列表
                        that.getTableQuery();
                        that.$message({
                            showClose: true,
                            message: '当前课程已确认下课！',
                            type: 'success'
                        });
                        // 返回下课列表
                        // that.$router.push({path: '/finish'});
                        this.$router.go(-1);
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 确认提交课时
            confirmLesson() {
                let that = this;
                // checkNum

                let param = {
                    token: localStorage.token,
                    userCode: that.form.userCode,
                    lesson: that.form.lesson,
                };
                let postdata = qs.stringify(param);
                testSelect(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        // 关闭弹窗
                        that.dialogVisible = false;
                        // 重载列表
                        that.getTableQuery();
                        that.$message({
                            showClose: true,
                            message: '课时调整成功！',
                            type: 'success'
                        });
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            // 确认下课
            addFinish() {
                this.clearForm();
                // 重新获得教练名单
                this.getCoachOption();
                this.dialogFinishVisible = true
                this.btnType = 0;
                this.dialogTitle = '确认下课'
            },
            // 添加下课会员
            addFinishMember() {
                let that = this;
                this.clearForm();
                this.getClassVipuserQuery();
                this.dialogValue = [];
                let std = [];
                if (this.tableData) {
                    this.tableData.map(function (item) {
                        std.push(item.UserId)
                    })
                }
                that.dialogValue = std;
                this.dialogVisible = true
            },
            // 删除
            delList() {
                let that = this;
                // checkNum
                if (!this.multipleSelection.length) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，需要先选中至少一条记录',
                        type: 'error'
                    });
                    return false
                }
                if (this.multipleSelection.length != 1) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，只能选中一条记录',
                        type: 'error'
                    });
                    return false
                }

                let detectorid = that.tableRadio.Id;

                let param = {
                    token: localStorage.token,
                    detectorid: detectorid,
                    status: 9,//0禁用1启用9删除
                };
                let postdata = qs.stringify(param);

                this.$confirm('此操作将永久删除该会员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    testSelect(postdata).then(res => {
                        let json = res;
                        if (json.Code == 0) {
                            that.$message({
                                showClose: true,
                                message: '选中的会员已删除！',
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

            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 查询按钮
            query() {
                this.getTableQuery();
                this.$message.success('查询完毕');
            },
            clearForm() {
                // clear
                this.form.name = '';
                this.form.userCode = '';
                this.form.shopId = '';
                this.dialogCoachValue = [];
            },
            // 页面数据查询
            getTableQuery() {
                let that = this;
                // this.getGetChildRegionSelect(0, 1);
                that.loading = true;
                // 查询检测设备。上级区域id，区域id必传。regionid传0，查询supregionid对应所有子区域的检测设备。 如果supregionid，regionid都传0，默认查询企业ID下所有检测设备
                let param = {
                    token: localStorage.token,
                    stdId: this.$route.query.id,//标签名
                    name: this.panel.name,//姓名
                    phone: this.panel.phone,//手机号
                    start: 1,//
                    tableMax: 9999,//
                };
                let postdata = qs.stringify(param);
                ClassOverDetailListQuery(postdata).then(res => {
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
            // 自动排序
            sortChange(params) {
                console.log(params)
            },
            // 过滤时间
            filterFmtDate(value, row, column) {
                let that = this;
                if (column == "0001-01-01T08:05:43+08:05" || column == "0001-01-01T00:00:00Z") {
                    return '无有效期';
                } else {
                    return nonTfmtDate(column, 11);
                }
            },
        },
        watch: {
            $route(to) {
                if (to.name == 'finishDetail') {
                    this.BeginTime = nonTfmtDatetoLength(this.$route.query.BeginTime, 16);
                    this.ClassName = this.$route.query.ClassName;
                    this.getTableQuery();
                }
            },
        },
    }
</script>

<style scoped>
    @import "../../assets/css/panel.css";

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
        border-radius: 250px;
        text-align: center;
        background: #F0F2F5;
        color: #545454;
        font-size: 14px;
        padding: 3px 10px;
        margin-left: 20px;
    }

    /deep/ .el-checkbox__inner {
        left: -20px;
    }
    .viplist /deep/ .el-transfer__buttons button:nth-child(1){
        display: none;
    }
    .lessons {
        padding: 1px 7px;
        border-radius: 250px;
        float: left;
        color: #000;
    }
</style>
