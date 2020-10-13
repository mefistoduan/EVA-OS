<template>
    <div id="bg">
        <el-container>
            <el-header></el-header>
            <el-main>
                <div class="bg">

                    <el-card class="box-card">
                        <h5 class="title">
                            <img src="../assets/img/login/logo.png" alt="">
                        </h5>
                        <span class="subtitle">xxx场馆管理系统</span>
                        <el-form ref="form" :model="form" label-width="0px">
                            <el-form-item label="">
                                <el-input v-model="form.name" placeholder="用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-input v-model="form.pwd" placeholder="密码" type="password"></el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-input v-model="form.valid" placeholder="验证码"
                                          @keyup.enter.native="onSubmit"></el-input>
                                <img id="validImg" :src="valImgSrc" alt="" width="100px" height="42px"
                                     title="看不清？刷一下试试！" @click="getGenVerifyPic">
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">登陆</el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    import {
        SignIn,
        GenVerifyPic,
        ManagerSelfQuery
    } from "../api/getApiRes";

    let qs = require('qs');
    import Global from '../Global.js'


    export default {
        data() {
            return {
                form: {
                    name: '',
                    pwd: '',
                    valid: '',
                    picId: '',
                },
                valImgSrc: '',
                valImgId: '',
                overtime: '',
                userLevel: '',
                userLevelText: '',
            }
        },
        mounted() {
            this.overtime = new Date();
            this.getGenVerifyPic();
            // 如果是手动退出用户
            if (this.$route.query.status == 1) {
                // 刷新验证图
                this.changeValImg();
                // 重置倒计时
                this.overtime = new Date();
            }
        },
        methods: {
            getGenVerifyPic() {
                let that = this;
                let param = {
                    token: localStorage.token,
                    width: 100,
                    height: 42,
                    noiseCount: 10,
                    length: 4,
                    source: 123456789,
                };
                let postdata = qs.stringify(param);
                GenVerifyPic(postdata).then(res => {
                    let json = res;
                    that.valImgSrc = json.Pic;
                    that.valImgId = json.Id;
                    that.form.picId = json.Id;
                })
            },
            //            点击验证码切换
            changeValImg: function () {
                // 刷新验证图
                this.getGenVerifyPic();
            },
            // 登陆
            onSubmit() {
                this.pwdLoginBtn()
            },
            // 密码登陆
            pwdLoginBtn() {
                let that = this;
                let username = this.form.name;
                let userpwd = this.form.pwd;
                let uservalid = this.form.valid;
                // 重置验证码超时
                that.overtime = new Date();
                if (!globalValid(username, 2, 17, '用户名', that)) return;
                if (!globalValid(userpwd, 5, 17, '密码', that)) return;
                if (!globalValid(uservalid, 3, 5, '验证码', that)) return;
                this.loginInfo();
            },
            getManagerSelfQuery() {
                let that = this;
                let param = {
                    token: localStorage.token,
                };
                let postdata = qs.stringify(param);
                ManagerSelfQuery(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.userLevelText = json.Rs.Role.Name;
                        // 1 会员 2 系统 3 店铺 4 教练
                        that.userLevel = json.Rs.Role.Id;
                        localStorage.shopId = json.Rs.ShopId;
                        localStorage.ShopId = json.Rs.ShopId;

                        switch (parseInt(that.userLevel)) {
                            case 1:
                                that.$router.push({path: '/'});
                                break;
                            case 2:
                                that.$router.push({path: '/adminManage'});
                                break;
                            case 3:
                                that.$router.push({path: '/'});
                                break;
                            case 4:
                                that.$router.push({path: '/'});
                                break;

                        }
                    } else {
                        if (json.Code == 1010) {
                            that.$message.error(json.Memo);
                            that.$router.push({path: '/login', query: {status: 1}});
                            return false
                        }
                        that.$message.error(json.Memo);
                    }
                })
            },
            // pwd登陆
            loginInfo: function () {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=login';
                let username = this.form.name;
                let userpwd = this.form.pwd;
                let uservalid = this.form.valid;
                let current = new Date();
                let betweenTime = current - that.overtime;
                let s = 120;
                if (betweenTime > s * 1000) {
                    that.changeValImg();
                    that.$message.error('验证码已超时，请重新输入');
                    return false
                }
                let param = {
                    verifyName: username,
                    verifyCode: userpwd,
                    picCode: uservalid,
                    picId: this.form.picId,
                    channel: 2
                };
                let postdata = qs.stringify(param);
                SignIn(postdata).then(res => {
                    if (res.Code == 0) {
                        that.res = res.Rs;
                        localStorage.userName = username;
                        localStorage.token = res.Rs.token;
                        this.getManagerSelfQuery();
                    } else {
                        if (res.Code == 10005) {
                            that.$refs.userpwd.value = '';
                            that.$notify({
                                title: '警告',
                                message: '密码错误，请重新输入',
                                type: 'warning'
                            });
                        } else {
                            that.$notify({
                                title: '警告',
                                message: res.Memo + ',错误代码：' + res.Code,
                                type: 'warning'
                            });
                            that.form.valid = '';
                            that.changeValImg();
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #bg {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background-color: #F0F2F5;
        background: url("../assets/img/login/bg.png") top center no-repeat;
        background-size: 100% 100%;
    }

    .title {
        font-size: 60px;
        text-align: center;
        color: #fff;
        margin-top: 3%;
        margin-bottom: 5px;
    }

    .title img {
        width: 362px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .subtitle {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #414141;
        margin-bottom: 10px;
        font-size: 41px;
    }

    .box-card {
        width: 577px;
        height: 733px;
        overflow: hidden;
        float: right;
        margin-top: 40px;
        margin-right: 10%;
    }

    .box-card .boxTitle {
        font-size: 30px;
        margin-bottom: 15px;
    }

    #validImg {
        position: relative;
        float: right;
        bottom: 52px;
    }

    /deep/ .el-form {
        width: 422px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    /deep/ .el-input__inner {
        height: 44px;
        background: #F0F2F5;
        border-radius: 0;
        margin-bottom: 10px;
    }

    /deep/ .el-button--primary {
        width: 100%;
        height: 50px;
        /*line-height: 32px;*/
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 18px;
    }
    /deep/ .el-form-item {
      margin-bottom: 9px;
      max-height: 52px;
      overflow: hidden;
    }
    /deep/ .el-form-item__content {
      line-height: normal;
    }
</style>
