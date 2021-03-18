<template>
    <div>
        <!--<Radar></Radar>-->
        <!--<Sankey></Sankey>-->

        <div class="other-people">
            <div class="image-border image-border1"></div>
            <div class="image-border image-border2"></div>
            <div class="image-border image-border3"></div>
            <div class="image-border image-border4"></div>
            <div class="other-people-title">旅客人脸图</div>
        </div>

        <Map></Map>
    </div>
</template>

<script>
    import Radar from '@/components/Radar.vue'
    import Sankey from '@/components/Sankey.vue'
    import Map from '@/components/Map.vue'

    export default {
        data() {
            return {
                editableTabsValue: '1'
            }
        },
        components: {
            Radar, Sankey,Map
        }
    }
</script>

<style scoped>

    .image-border {
        position: absolute;
        width: 20px;
        height: 20px;
    }

    .image-border1 {
        top: 0px;
        left: 0;
        border-left: 2px solid #6DC1FF;
        border-top: 2px solid #6DC1FF;
    }

    .image-border2 {
        top: 0;
        right: -2px;
        border-right: 2px solid #6DC1FF;
        border-top: 2px solid #6DC1FF;
    }

    .image-border3 {
        bottom: 0;
        left: 0;
        border-bottom: 2px solid #6DC1FF;
        border-left: 2px solid #6DC1FF;
    }

    .image-border4 {
        bottom: 0;
        right: -2px;
        border-right: 2px solid #6DC1FF;
        border-bottom: 2px solid #6DC1FF;
    }

    .other-people {
        border: 1px dashed #01355B;
        width: 200px;
        height: 200px;
        margin-left: 61px;
        padding: 5px;
        position: relative;
    }

    .other-image {
        width: 100%;
        height: 100%;
    }

    .other-people-title {
        position: absolute;
        background: rgb(21, 90, 154);
        height: 52px;
        opacity: 0.5;
        font-size: 14px;
        line-height: 52px;
        top: 25px;
        left: 25px;
    }
</style>
