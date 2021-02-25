<template>
    <div class="context">
        <h5>card animate</h5>
        <el-button type="danger" @click="reset">重置状态</el-button>
        <el-button type="success" @click="toggle">立即执行</el-button>
        <el-button type="success" @click="nextToggle">异步执行</el-button>
        <Card :state="state0"></Card>
        <Card :state="state1"></Card>
        <Card :state="state2"></Card>
        <Card :state="state3"></Card>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'
    export default {
        data() {
            return {
                state0: false,
                state1: false,
                state2: false,
                state3: false,
            }
        },
        methods: {
            reset() {
                this.state0 = false;
                this.state1 = false;
                this.state2 = false;
                this.state3 = false;
                this.$message({
                    message: '状态已重置',
                    type: 'success'
                });
            },
            toggle() {
                this.state0 = !this.state0;
                console.log(this.state);

            },
            nextToggle() {
                let that = this;
                that.state = false;
                let timeScope = 250;
                let timeLong = 0;
                let arr = [
                    'state0',
                    'state1',
                    'state2',
                    'state3',
                ];
                let row = null;
                for (let i = 0; i < 4; i++) {
                    timeLong = parseInt(i * timeScope);
                    that.timer = setTimeout(() => {   //设置延迟执行
                        row = 'that.'+arr[i] +'= true';
                        console.log(row);
                        eval(row)
                    }, timeLong)
                }
            }
        },
        components: {
            Card
        }
    }
</script>

<style scoped>
    .context {
        height: 100%;
        padding: 35px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: dodgerblue;
    }
</style>