<template>
    <div class="test">
        <h5>this is test page</h5>
        <webscoket></webscoket> 
    </div>
</template>

<script>
    import webscoket from '@/components/webscoket.vue'
    export default {
        data() {
            return {
                loftIndex: 0,
            }
        },
        methods: {
            handleSelect(Id) {
                console.log(Id);
                
            },
        },
        components: {
            webscoket
        }
    }
</script>

<style scoped>
    .test {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        color:#fff;
    }

</style>
