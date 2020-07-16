<template>
    <div class="form_container">
        <el-form ref="form" :model="form" label-width="110px" :rules="rules">
            <el-form-item label="原密码" prop="old">
                <el-input v-model="form.old" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpwd">
                <el-input v-model="form.newpwd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="again">
                <el-input v-model="form.again" type="password"></el-input>
            </el-form-item>
            <s>
                <i class="el-icon-warning"></i><em>密码由6~32位字母、数字及下划线组成</em>
            </s>
            <el-form-item>
                <el-button size="small" type="primary" @click="onSubmit('form')">确认</el-button>
                <el-button size="small" @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    let qs = require('qs');
    import Global from '../Global.js'
    import {modPwd, logout} from '../api/getApiRes.js'

    export default {
        data() {
            let samepass = (rule, value, callback) => {
                if (value !== this.form.newpwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            let pwdPass = (rule, value, callback) => {
                let re = /^[0-9a-zA-Z_]{1,}$/;
                if (value.search(re) == -1) {
                    callback(new Error('错了哦，密码只能由字母、数字及下划线组成'));
                } else {
                    callback()
                }
            };
            return {
                form: {
                    old: '',
                    newpwd: '',
                    again: '',
                },
                rules: {
                    old: [
                        {required: true, message: '请输入原密码', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'}
                    ],
                    newpwd: [
                        {required: true, message: '请输入新密码', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                        {validator: pwdPass, trigger: 'blur'}
                    ],
                    again: [
                        {required: true, message: '请输入确认密码', trigger: 'blur'},
                        {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'},
                        {validator: pwdPass, trigger: 'blur'},
                        {validator: samepass, trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            onSubmit(formName) {
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.submitPwd()
                    } else {
                        that.$message({
                            showClose: true,
                            message: '错了哦，提交新密码失败',
                            type: 'error'
                        });
                        that.form.old = '';
                        that.form.newpwd = '';
                        that.form.again = '';
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitPwd() {
                let that = this;
                let param = {
                    oldPwd: that.form.old,
                    newPwd: that.form.newpwd,
                };
                let postdata = qs.stringify(param);
                modPwd(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.$message({
                            showClose: true,
                            message: '密码修改成功',
                            type: 'success'
                        });
                        // clean info
                        that.old = '';
                        that.newpwd = '';
                        that.again = '';
                        that.logoutPage();
                    } else {
                        that.$message.error(json.Memo);
                    }
                });
            },
            // 重登录
            logoutPage() {
                const that = this;
                let postdata = {};
                logout(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.$router.push({
                            path: '/login',
                            query: {
                                status: 1
                            }
                        })
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            }
        },
    }
</script>
<style scoped>
    #pages {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        display: block;
        margin: 0 auto;
        padding-bottom: 80px;
    }

    .form_container {
        width: 50%;
        overflow: hidden;
        margin-top: 20px;
        margin-left: 40px;
        background: #fff;
        padding: 20px;
    }

    s {
        height: 50px;
        line-height: 40px;
        padding-left: 20px;
        text-decoration: none;
        font-style: normal;
    }

    i {
        color: red;
    }

    s em {
        font-style: normal;
    }
</style>
