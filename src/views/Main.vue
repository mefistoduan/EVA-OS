<template>
    <div class="container">
        <timePart></timePart>
    </div>
</template>

<script>
    import timePart from '@/components/timePart.vue'
    export default {
        data() {
            return {
                editableTabsValue: '1'
            }
        },
        components: {
            timePart
        }
    }
</script>

<style scoped>

</style>
