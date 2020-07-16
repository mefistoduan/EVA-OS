<template>
    <div>
        <el-card class="panel" shadow="always">
            <div class="panel-body">
                <div class=" panel_control">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <em>起始:</em>
                            <el-date-picker
                                    class="panel_data"
                                    v-model="panel.time1[0]"
                                    type="date"
                                    placeholder="起始日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <em>截止:</em>
                            <el-date-picker
                                    class="panel_data"
                                    v-model="panel.time1[1]"
                                    type="date"
                                    placeholder="截止日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <em>用户账号:</em>
                            <el-input v-model="panel.USERCODE" placeholder="请输入用户账号"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <em>关键词:</em>
                            <el-input v-model="panel.keyword" placeholder="请输入关键词"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <em>状态:</em>
                            <el-select v-model="panel.taskstatus">
                                <el-option
                                        v-for="item in panel.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4">
                            <el-button size="small" type="primary" @click="query">查询</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-card>
        <el-card class="table" shadow="always">
             <span class="dataTables_length">
            每页  <el-select v-model="pageination.pageItem" placeholder="请选择条数" @change="handleSizeChange">
            <el-option
                    v-for="item in pageination.pageoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
            条记录
        </span>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
            <br>
            <el-pagination :total="pageination.total" :page-size="pageination.pageItem"
                           @current-change="pageChange"></el-pagination>
        </el-card>
    </div>

</template>

<script>
    import Global from '../Global.js'

    export default {
        data() {
            return {
                // panel 配置项目
                panel: {
                    usercode: '',
                    username: '',
                    compname: '',
                    keyword: '',
                    USERCODE: '',
                    taskstatus: 99,
                    options: [
                        {value: 99, label: '全部'},
                        {value: 1, label: '进行中'},
                        {value: 2, label: '已完成'},
                    ],
                    time1: globalBt(),
                },
                pageination: {
                    pageItem: 100,
                    pageoptions: pageOptions(),
                    total: 100,
                    pageIndex: 1,
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        mounted() {
            this.getTableQuery();
        },
        methods: {
            // 查询按钮
            query() {
                this.getTableQuery();
                this.$message.success('查询完毕');
            },
            // 页面数据查询
            getTableQuery() {
                // let that = this;
                // that.loading = true;
                // let url = headapi + '?ctl=ajax&mod=dial&act=taskListQuery';//获取
                // let param = {
                //     'taskstatus': that.panel.taskstatus,
                //     'bt': globaltime2String(that.panel.time1[0]),
                //     'et': globaltime2String(that.panel.time1[1]),
                //     'KEYWORD': that.panel.keyword,
                //     'USERCODE': that.panel.USERCODE,
                // };
                // let JSON = '';
                // let postdata = qs.stringify(param);
                // axios.post(url, postdata)
                //     .then(function (response) {
                //         JSON = response.data;
                //         that.loading = false;
                //         that.allTableData = JSON.rs;
                //         that.recordsTotal = JSON.rs.length;
                //         // 设置分页数据
                //         that.setPaginations();
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
            },
            // 导出excel
            btnExpAll() {
                let that = this;
                let url = headapi + '?ctl=ajax&mod=czgl&act=czcx_excel';//获取
                let bt = globaltime2String(that.panel.time1[0]);
                let et = globaltime2String(that.panel.time1[1]);
                let usercode = that.panel.usercode;
                window.location = url + '&bt=' + bt + '&et=' + et + '&usercode=' + usercode;
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
                return globalfmtDate(column, 11);
            },
            // 过滤金额
            filterMoney(value, row, column) {
                let that = this;
                return parseFloat(column).toFixed(2);
            },
        },
    }
</script>

<style scoped>
    @import "../assets/css/panel.css";
</style>
