<template>
    <div class="container">
<!--        <timePart></timePart>-->
<!--        <hand></hand>-->

      <div class="cube">乔治亚</div>
    </div>
</template>

<script>
import '../libs/rem';
export default {
        data() {
            return {
                editableTabsValue: '1'
            }
        },
        components: {
        }
    }
</script>

<style scoped>
    .cube {
      width: 3rem;
      height: 3rem;
      font-size: 0.8rem;
      line-height: 3rem;
      color: #fff;
      background: #03B1FF;
      text-align: center;
    }
</style>
