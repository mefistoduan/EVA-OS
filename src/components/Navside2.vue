<template>
    <div id="navside" :class="[{'wild':wildState == 0},{'short':wildState != 0}]">
        <img src="../assets/logo.png" class="logo" width="100%" height="60px" alt="">
        <header class="logo-env">
            <ul id="main-menu" class="main-menu" data-clmid="0" data-url="">
                <li v-for="(nav,index) in navs" :key="index">
                    <a @click="handleNodeClick(nav,index)">
                        <i :class="nav.clicon"></i>
                        <span class="title" :data-url="nav.clmurl">{{nav.clmname}}</span>
                        <div v-if="nav.childs != ''  && nav.clmname != '退出系统' && nav.clmname != '首页' && nav.clmname != '关于我们'  ">
                            <i class="el-icon-arrow-up" v-if="childs && index == hasChilds"></i>
                            <i class="el-icon-arrow-down" v-else></i>
                        </div>
                    </a>
                    <el-collapse-transition>
                        <ul class="hide_tap child_tap" v-show="childs && index == hasChilds && showChilds">
                            <li v-for="(child,j) in nav.childs" v-bind:key="j">
                                <a @click="handleNodeClick(child,index)">
                                    <i class="el-icon-info"></i>
                                    <span class="title" :data-url="child.clmurl">{{child.clmname}}</span>
                                </a>
                            </li>
                        </ul>
                    </el-collapse-transition>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import Navs from '../api/Navs';
    import axios from 'axios';

    let qs = require('qs');
    export default {
        data() {
            return {
                wildState: 0,
                appname: '',
                showChilds: false,
                hasChilds: '',
                navs: [],
                childs: [],
                navshow: [false, false, false],
            }
        },
        mounted() {
            this.getTableQuery();
        },
        methods: {
            hidePanel() {
                this.wildState = 1;
            },
            showPanel() {
                this.wildState = 0;
            },
            getTableQuery() {
                // 菜单
                this.navs = Navs;
            },
            handleNodeClick(menudata, index) {
                let that = this;
                let clmurl = menudata['clmurl'];
                if (menudata.clmname == '退出系统') {
                    that.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        that.logout();
                    }).catch(() => {
                        that.$message({
                            showClose: true,
                            message: '您已取消退出操作',
                        });
                    });
                } else {
                    if (!clmurl) {
                        that.hasChilds = index;
                        that.showChilds = !that.showChilds;
                        // that.showChilds = true;
                    } else {
                        that.$emit('navOpen', menudata);
                    }
                }
            },
            navshowClick: function (index) {
                this.navshow = [false, false, false];
                this.navshow[index] = true;
            },
            // 注销
            logout() {
                localStorage.usercode = '';
                this.$router.push({path: '/login', query: {status: 1}});
                // const that = this;
                // let url = headapi + '?ctl=&act=logout';
                // let param = {};
                // let postdata = qs.stringify(param);
                // axios.post(url, postdata).then(function (data) {
                //     let json = data.data;
                //     // that.$router.push({path: '/login', query: {status: 1}});
                // }, function (response) {
                //     console.info(response);
                // })
            }
        },
        components: {}
    }
</script>
<style scoped>
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #navside {
        position: absolute;
        top: 0px;
        height: 100%;
        overflow: hidden;
        z-index: 2000;
        background-color: #EFEFEF;
        color: #333;
        text-align: center;
        line-height: 200px;
        border-right: 6px solid #E6E6E6;
    }

    .wild {
        width: 230px;
    }

    .short {
        width: 0px !important;
    }

    .logo {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    .main-menu {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }

    .main-menu li {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        border-bottom: 1px solid #E5E5E5;
    }

    .main-menu li a {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 57px;
        line-height: 57px;
        color: #3B3B3B;
        border-left: 3px solid #EFEFEF;
        font-size: 16px;
        text-align: center;
    }

    .main-menu li a:hover {
        background-color: #fff;
        border-left: 3px solid #03B1FF;
        color: #03B1FF;
    }

    .main-menu a i {
        float: left;
        margin-top: 14px;
        margin-left: 5px;
    }

    .main-menu a span {
        min-width: 100px;
        float: left;
        text-align: left;
        height: 57px;
        text-indent: 6px;
        line-height: 57px;
        font-size: 16px;
    }

    .el-icon-arrow-right {
        width: 10px;
        height: 13px;
        line-height: 13px;
        color: #fff;
        font-style: normal;
        float: right;
        font-size: 12px;
    }

    #main-menu li a > i {
        width: 22px;
        height: 22px;
        float: left;
        background-position: top center;
        background-repeat: no-repeat;
        margin-left: 33px;
        margin-top: 18px;
        margin-right: 21px;
    }

    .child_tap a i {
        margin-left: 53px !important;
        margin-right: 11px !important;
    }

    .child_tap a span {
        font-size: 14px;
    }




</style>
