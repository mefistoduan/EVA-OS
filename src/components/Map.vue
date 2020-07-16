<template>
    <div class="amap-wrapper">
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'vue-amap向你问好！'
            }
        }
    }
    // 更多配置 参阅https://elemefe.github.io/vue-amap/#/zh-cn/coverings/marker
</script>

<style scoped>
    .amap-wrapper {
        width: 500px;
        height: 500px;
    }
</style>
