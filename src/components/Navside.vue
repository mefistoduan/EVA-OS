<template>
    <div>
        <el-row  :class="[{'shortnav':isCollapse},{'longNav':!isCollapse}]">
            <img src="../assets/logo.png" class="logo" width="100%" height="60px" alt="" v-if="!isCollapse">
            <img src="../assets/logo.png" class="littleLogo" width="65px" height="60px" alt="" v-if="isCollapse">
            <el-col :span="24">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                        :collapse="isCollapse"
                >
                    <el-menu-item index="1" route="/" title="系统首页">
                        <i class="el-icon-location"></i>
                        <span slot="title">系统首页</span>
                    </el-menu-item>
                    <el-submenu :index="nav.clmid" :route="nav.clmurl" v-for="nav in navs">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{nav.clmname}}</span>
                        </template>
                        <el-menu-item-group v-for="(child,j) in nav.childs">
                            <el-menu-item :index="child.clmid" :route="child.clmurl">{{child.clmname}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="99" route="#" title="退出登陆"  @click="clickLogout">
                        <i class="el-icon-location"></i>
                        <span slot="title">退出登陆</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Navs from '../api/Navs';

    export default {
        data() {
            return {
                wildState: 0,
                navs: [],
            }
        },
        props: ['isCollapse'],
        mounted() {
            this.getTableQuery();
        },
        methods: {
            handleSelect(i, s, t) {
                this.$emit('TabsAdd', i);//触发事件
            },
            getTableQuery() {
                // 菜单
                this.navs = Navs;
            },
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            clickLogout() {
                let that = this;
                that.$confirm('此操作将退出当前账号, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    localStorage.usercode = '';
                    that.$router.push({path: '/login', query: {status: 1}});
                }).catch(() => {
                    that.$message({
                        showClose: true,
                        message: '您已取消退出操作',
                    });
                })
            }
        }
    }
</script>
<style scoped>
    .shortnav {
        position: absolute;
        width: 65px;
        top: 0;
        bottom: 0;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 100%;
    }

    .longNav {
        position: absolute;
        width: 320px;
        top: 0;
        bottom: 0;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        height: 100%;
    }

    .el-col, .el-menu {
        height: 100%;
    }

    .logout {
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        height: 56px;
        line-height: 56px;
    }

    .logout:hover {
        background: rgb(67, 74, 80);
    }
    .littleLogo {
        float: left;
    }
</style>
