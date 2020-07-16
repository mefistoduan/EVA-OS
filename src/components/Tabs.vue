<template>
    <div class="tabsContainer">
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                    v-for="(item, index) in handleTabsList"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabIndex: 1,
            }
        },
        props: ['handleTabsList','editableTabsValue'],
        methods: {
            navOpen: function (data) {
                let that = this;
                that.$router.push({path: data.clmurl});
            },
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs.push({
                    title: '系统首页',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>

<style scoped>
    .tabsContainer {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;

    }

   .tabsContainer >>> .el-tabs__header {
        padding-left: 15px;
    }
</style>
