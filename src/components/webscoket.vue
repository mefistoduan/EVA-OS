<template>
    <div class="webscoket">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-button type="" @click="build">建立连接</el-button>
                <el-button type="danger" @click="destory">销毁连接</el-button>

            </el-col>
            <el-col :span="4">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="start">推送内容</el-button>
            </el-col>
        </el-row>
        <p>
            {{result}}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loftIndex: 0,
                result: 0,
                input: '',
                ws: null
            }
        },
        methods: {
            build() {
                this.ws = new WebSocket('ws://123.207.136.134:9010/ajaxchattest');
                this.ws.onopen = () => {
                    // Web Socket 已连接上，使用 send() 方法发送数据
                    this.ws.send('1')
                    console.log('数据发送中...')
                    this.ws.onmessage = evt => {
                        console.log('数据已接收...')
                        this.result = evt.data;
                    }
                }
            },
            destory() {
                this.ws.close();
            },
            start() {
                this.ws.send(this.input);
            }
        }
    }
</script>

<style scoped>
    .webscoket {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>