<template>
    <div class="container">
        <Hand></Hand>
    </div>
</template>

<script>
    import Hand from '@/components/Hand.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            Hand
        }
    }
</script>

<style scoped>
    .container {
        height: 100%;
        padding: 35px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: dodgerblue;
    }
</style>
