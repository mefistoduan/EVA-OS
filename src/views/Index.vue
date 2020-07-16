<template>
    <div class="container">
        <el-container>
            <el-aside :class="[{'shortElaside':isCollapse},{'lognElaside':!isCollapse}]">
                <Navside :isCollapse="isCollapse" @TabsAdd="handleTabsAdd"></Navside>
            </el-aside>
            <el-container>
                <el-header>
                    <Headside @lefthide="left_hide"></Headside>
                </el-header>
                <!--<Tabs :handleTabsList="handleTabsList" :editableTabsValue="editableTabsValue"></Tabs>-->
                <el-main>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
                <el-footer v-if="false">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Headside from '@/components/Headside.vue'
    import Navside from '@/components/Navside.vue'
    // import Tabs from '@/components/Tabs.vue'
    import Navs from '../api/Navs';

    export default {
        name: 'Home',
        data() {
            return {
                isCollapse: true,
                aSideState: false,
                thisClick: 0,
                tabwildState: 1,
                navs: Navs,
                handleTabsList: [{
                    title: '系统首页',
                    name: '1',
                    clmurl: '/',
                }],
                editableTabsValue: '1'
            }
        },
        methods: {
            left_hide() {
                this.aSideState = !this.aSideState;
                this.isCollapse = !this.isCollapse;
            },
            handleTabsAdd: function (data) {
                let that = this;
                let str = ""; //存放第一层遍历的值
                let strArray = []; //存放第二层遍历的值
                let item = {};
                console.log(data);
                if (data == 1) {
                    // 首页直接处理了
                    item = {
                        title: '系统首页',
                        name: '系统首页',
                        clmurl: '/',
                    };
                } else {
                    for (var i = 0; i < Navs.length; i++) {
                        str += Navs[i].id; //获取第一层的值
                        for (var j = 0; j < Navs[i].childs.length; j++) {
                            if (Navs[i].childs[j].clmid == data) {
                                strArray.push(Navs[i].childs[j])
                            }
                        }
                    }
                    item = {
                        title: strArray[0].clmname,
                        name: strArray[0].clmname,
                        clmurl: strArray[0].clmurl,
                    };
                }
                // 去掉重复的
                that.handleTabsList.map(function (e, i) {
                    if (e.title == item.title) {
                        that.handleTabsList.splice(i, 1)
                    }
                });
                that.handleTabsList.push(item);
                that.editableTabsValue = item.title;
            },
        },
        components: {
            Headside, Navside
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .el-header {
        padding: 0 !important;
    }
    .shortElaside {
        width: 60px!important;
        overflow: hidden;
        height: 100%;
        float: left;
    }
    .lognElaside {
        width: 320px!important;
        overflow: hidden;
        height: 100%;
        float: left;
    }
    /deep/ .nav {
        width: 60px;
    }
</style>
