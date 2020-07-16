<template>
    <div id="headside">
        <nav class="navbar user-info-navbar" role="navigation">
            <i :class="[{'el-icon-arrow-left left_hide_icon':left_panel_state},{'el-icon-arrow-right left_show_icon':!left_panel_state}] "
               @click="left_hide"></i>
            <div @click="checkNews">
                <el-badge :value="newnum"
                          class="item"
                          v-if="newnumState"
                >
                    <el-button size="small">
                        <i class="el-icon-message"></i>
                    </el-button>
                </el-badge>
            </div>
            <ul class="user-info-menu right-links list-inline list-unstyled">
                <li class="dropdown user-profile">
                    <el-dropdown>
                          <span class="el-dropdown-link customer_serve">
                            {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" @click.native="logoutClick">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="pull-right" style="min-height: 40px;">
						<span class="customer_serve">工作日 {{time}} &nbsp;客服电话： &nbsp;{{tel}}&nbsp;
                            <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODA2Mzg3OV80ODQ0MTlfNDAwMDA3OTM2MF8yXw"
                               id="qq_customer" target="_blank">
                                 客服QQ: {{qq}}
                            </a>
                        </span>
                </li>

            </ul>
        </nav>
    </div>
</template>
<script>
    import axios from 'axios';

    let qs = require('qs');
    export default {
        data() {
            return {
                user: {
                    name: localStorage.userName,
                },
                time: '8:30-17:30',
                tel: '4000-0079-360',
                qq: '4000079360',
                newnum: '',
                newnumState: false,
                left_panel_state: false
            }
        },
        mounted() {
            this.readNewNum();
//            定时轮询news
            //设置10s刷新一次数据
            // if (this.timer) {
            //     clearInterval(this.timer);
            // }else{
            //     this.timer = setInterval(() => {
            //         this.readNewNum();
            //     },10000)
            // }
        },
        methods: {
//            隐藏左侧和显示
            left_hide: function () {
                let that = this;
                that.left_panel_state = !that.left_panel_state;
                console.log(223);
                this.$emit('lefthide');
                // if (!that.left_panel_state) {
                //     this.$emit('left_hide_func');
                // } else {
                //     this.$emit('right_hide_func');
                // }
            },
//            打开消息提示
            checkNews: function () {
                let that = this;
                const h = this.$createElement;
                this.$notify({
                    title: '标题名称',
                    position: 'top-left',
                    message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
                    onClose: function () {
                        //关闭时调用已读接口
                    },
                    onClick: function () {
                        //关闭时调用已读接口
                        this.close();//关闭notify
                        let thisdata = {name: 'message', link: '/#/message'};
                        that.$emit('navOpen', thisdata);//跳转新的message
                    }
                });
            },
//            读取消息提示数量
            readNewNum: function () {
                this.newnum = 0;
                this.newnumState = false;
//                ajax todo
            },
            // 退出登录
            logoutClick: function () {
                let that = this;
                that.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let url = headapi + '?ctl=ajax&mod=index&act=logout';
                    let param = {};
                    let postdata = qs.stringify(param);
                    axios.post(url, postdata).then(function (data) {
                        that.$router.push({path: '/login', query: {status: 1}});
                    }, function (response) {
                        console.info(response);
                    })
                }).catch(() => {

                });
            },
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #headside {
        width: 100%;
        height: 41px;
        overflow: hidden;
        float: right;
        z-index: 1111;
        border-bottom: 1px solid #efefef;
    }

    .user-info-navbar {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #ffffff;
        min-height: 0;
        height: 41px;
        border: 0;
        padding: 0;
        margin-bottom: 0px;
    }

    .user-info-navbar .user-info-menu > li > a {
        position: relative;
        display: block;
        padding: 12px 20px;
        color: #979898;
        border-bottom: 1px solid #ffffff;
        top: 1px;
        z-index: 5;
    }

    .user-info-navbar .user-info-menu > li > a .badge {
        font-size: 9px;
        position: absolute;
        top: 3px;
        right: 10px;
        padding: 4px;
        min-width: 18px;
        line-height: 1;
    }

    .user-info-navbar .user-info-menu > li > form {
        position: relative;
        display: block;
        padding: 12px 20px;
        padding-bottom: 5px;
        margin: 0;
        border-bottom: 1px solid #ffffff;
    }

    .user-info-navbar .user-info-menu > li.search-form .search-field,
    .navbar.horizontal-menu .navbar-inner > .nav > li.search-form .search-field {
        position: absolute;
        top: 25%;
        right: 15px;
        margin-top: 0px;
        line-height: 1;
        height: 25px;
        border: 1px solid #dddddd;
        border: 0;
        padding: 0 10px;
        width: 170px;
        padding-right: 30px;
        font-size: 12px;
        z-index: 1;
        visibility: hidden;
        background: #f3f3f3;
        zoom: 1;
        filter: alpha(opacity=0);
        -webkit-opacity: 0;
        -moz-opacity: 0;
        opacity: 0;
    }

    .frm-body {
        background-color: #eeeeee;
    }

    .sidebar-menu {
        display: table-cell;
        position: relative;
        width: 230px;
        background: #2c2e2f;
        z-index: 1;
    }

    footer.main-footer {
        padding: 8px 20px 0px 20px;
        border-top: 1px solid #dddddd;
        font-size: 12px;
        margin-left: -30px;
        margin-right: -30px;
        margin-top: 10px;
        margin-bottom: -10px;
        background-color: #eeeeee;
    }

    .panel {
        position: relative;
        background: #ffffff;
        padding: 10px 10px;
        border: 0;
        margin-top: 5px;
        margin-bottom: 0px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    .panel .panel-body {
        padding: 0;
        padding-top: 20px;
        color: #000000;
    }

    .panel-title {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .panel .panel-heading {
        position: relative;
        padding: 0;
        margin: 0;
        background: none;
        font-size: 17px;
        padding-bottom: 0px;
        border-bottom: 2px solid #f5f5f5;
    }

    .panel.panel-color .panel-heading {
        margin-top: -10px;
        margin-left: -10px;
        margin-right: -10px;
        padding: 10px 10px;
        border-bottom: 0;
    }

    .panel.panel-color.collapsed > .panel-heading {
        margin-bottom: -10px;
    }

    .xe-widget.xe-progress-counter.xe-progress-counter-huise {
        background-color: #d7d7d7
    }

    .xe-widget.xe-progress-counter.xe-progress-counter-huise .xe-background {
        color: #fff
    }

    .xe-widget.xe-progress-counter.xe-progress-counter-huise .xe-upper {
        background-color: transparent
    }

    .table > thead > tr > td, .table > tbody > tr > td, .table > tfood > tr > td, .table > thead > tr > th, .table > tbody > tr > th, .table > tfood > tr > th {
        padding: 5px 5px 5px 5px;
    }

    .input-sm {
        height: 26px;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 0;
    }

    .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .form-horizontal .form-group {
        margin-left: 0px;
        margin-right: 0px;
    }

    .btn-sm, .btn-group-sm > .btn {
        font-size: 14px;
        line-height: 1.5;
        padding: 2px 6px;
        border-radius: 0px;
    }

    .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_paginate {
        padding-top: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter {
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .comm_style {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 auto;
    }

    .img_style {
        width: 40px;
        /*height: 40px;*/
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    #modal_img {
        width: 300px;
        height: 300px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .modal-content {
        margin: 0 auto;
        /*width: 50%;*/
        /*20170623 mefisto*/
    }

    .customer_serve {
        float: right;
        margin-right: 20px;
        font-size: 12px;
        color: #585858;
        line-height: 45px;
        text-align: right;
    }

    #about_us {
        color: #03B1FF;
        cursor: pointer;
    }

    .dropdown-menu-list a img {
        width: 30px;
        height: 30px;
    }

    .user-info-navbar .user-info-menu > li .dropdown-menu .dropdown-menu-list li a .line.desc, .navbar.horizontal-menu .navbar-inner > .nav > li .dropdown-menu .dropdown-menu-list li a .line.desc {
        margin-right: 0;
    }

    .user-info-navbar .user-info-menu > li .dropdown-menu .dropdown-menu-list li, .navbar.horizontal-menu .navbar-inner > .nav > li .dropdown-menu .dropdown-menu-list li {
        min-height: 50px;

    }

    .empty_li_noti {
        text-align: center;
        line-height: 50px !important;
    }

    .disagree_invite {
        background-color: #FF0000;
    }

    .agree_invite {
        background-color: #25CC42;
    }

    .disagree_invite:hover {
        background-color: #d20000;
    }

    .agree_invite:hover {
        background-color: #25CC42;
    }

    .invite_msg {
        width: 95%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 34px;
        margin-top: 10px;
    }

    .invite_time {
        width: 95%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
    }

    .left_hide_icon {
        margin-top: 7px;
        border: 1px solid #ccc;
        padding: 5px;
        float: left;
        margin-left: 15px;
        cursor: pointer;
    }

    .left_hide_icon:hover {
        background: #ccc;
        color: #fff;
    }

    .left_show_icon {
        margin-top: 7px;
        border: 1px solid #ccc;
        padding: 5px;
        float: left;
        margin-left: 15px;
        cursor: pointer;
    }

    .left_show_icon:hover {
        background: #ccc;
        color: #fff;
    }

    .item {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
    }

    .el-button--small, .el-button--small.is-round {
        padding: 4px 8px;
    }

    .user-profile {
        float: right;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        padding: 5px;
    }
</style>
