<template>
    <div class="context">
        <div class="panel">
            <h5>操作日志</h5>
            <div class="panel-body">
                <div class="panel_control">
                    <el-row :gutter="20">
                        <el-col :span="5">
                            <el-date-picker
                                    v-model="panel.timeScope"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <em>操作者:</em>
                            <el-select v-model="panel.userId">
                                <el-option
                                        v-for="item in panel.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
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
        <div class="table">
            <el-table
                    :data="tableData"
                    border
                    is-horizontal-resize
                    :default-sort="{prop: 'date', order: 'descending'}"
                    element-loading-background="rgba(0, 0, 0, 0.8)"
                    class=""
            >
                <el-table-column
                        type="index"
                        label="序号"
                        align="center"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="CreatedAt"
                        label="日期"
                        :formatter="filterFmtDate"
                        width="180"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="OptName"
                        label="操作者"
                        sortable
                        width="120"
                >
                </el-table-column>
                <el-table-column
                        prop="OptPhone"
                        label="手机号"
                        width="120"
                >
                </el-table-column>
                <el-table-column
                        prop="Parameter"
                        label="执行语句"
                        sortable
                >
                    <template slot-scope="scope">
                        <el-popover
                                placement="top"
                                title="具体语句"
                                trigger="hover"
                                :content="scope.row.Parameter">
                            <span slot="reference"
                                  v-if="scope.row.Parameter.length > 40">{{scope.row.Parameter.substr(0,40)}} ....</span>
                        </el-popover>
                        <span v-if="scope.row.Parameter.length <= 40">{{scope.row.Parameter}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="OptInfo"
                        label="操作信息"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="Result"
                        label="操作结果"
                        width="120"
                        sortable
                >
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
        OptLogListQuery,
        testTable,
        testSelect, ShopManagerListQuery
    } from "../api/getApiRes";

    let qs = require('qs');
    export default {
        data() {
            return {
                dialogVisible: false,
                dialogTitle: '新增管理员',
                times: globalBt2(7),
                // panel 配置项目
                panel: {
                    userCode: '',
                    tel: '',
                    userId: '',
                    shopList: 0,
                    options: [],
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
                    time1: globalBt(),
                    timeScope: globalBt2(30),
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
                    shopId: '',
                },
                shops: [],
                tableData: []
            }
        },
        mounted() {
            this.panelSelect();
            this.getTableQuery();
        },
        methods: {
            // 加载选项
            panelSelect() {
                let that = this;
                let param = {
                    token: localStorage.token,
                    start: 1,
                    tableMax: 999,
                };
                let postdata = qs.stringify(param);
                ShopManagerListQuery(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.panel.options = this.turnResToOptionByUsers(json.Rs);
                        that.panel.options.unshift({value: '', label: "全部"});
                        console.log(that.panel.options);
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            turnResToOptionByUsers(data) {
                if (!data) return false
                let ids = data.map(item => {
                    return {
                        label: item.Name + ' ' + item.Phone,
                        key: parseInt(item.Id),
                        value: parseInt(item.Id),
                    }
                })
                return ids
            },
            clearForm() {
                // clear
                this.form.name = '';
                this.form.userCode = '';
                this.form.shopId = '';
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 查询按钮
            query() {
                this.getTableQuery();
                this.$message.success('查询完毕');
            },
            // 页面数据查询
            getTableQuery() {
                console.log(this.panel.userId);
                let that = this;
                // this.getGetChildRegionSelect(0, 1);
                that.loading = true;
                // 查询检测设备。上级区域id，区域id必传。regionid传0，查询supregionid对应所有子区域的检测设备。 如果supregionid，regionid都传0，默认查询企业ID下所有检测设备
                let param = {
                    token: localStorage.token,
                    name: this.panel.name,
                    phone: this.panel.phone,
                    userId: this.panel.userId,
                    bt: nonTfmtDatetoLength(that.panel.timeScope[0], 10) + " 00:00:00",
                    et: nonTfmtDatetoLength(that.panel.timeScope[1], 10) + " 23:59:59",
                    start: 1,//
                    tableMax: 9999,//
                };
                let postdata = qs.stringify(param);
                OptLogListQuery(postdata).then(res => {
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
                return nonTfmtDate(column, 11);
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
        padding-bottom: 60px;
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

    /deep/ .el-date-editor .el-range__icon {
        line-height: 22px;
    }

    .panel /deep/ .el-date-editor .el-range-separator {
        line-height: 22px;
    }
</style>
