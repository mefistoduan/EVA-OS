/*83856*/
<template>
  <div>
    <h5>hexagon</h5>
    <div class="list">
      <div class="list_child">
        <div class="list_child_child"></div>
      </div>
    </div>

    <br>

    <div class="many">
      <div class="list " v-for="i in list">
        <div class="list_child">
          <div class="list_child_child">
            <em>{{i.name}}</em>
            <span>{{i.val}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      list:[
        {name:'核心温度',val:'52.6°C'},
        {name:'启动时间',val:'12:21:11'},
        {name:'当前天气',val:'9°C 晴'},
        {name:'运行模式',val:'RUN'},
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
    }
  }
}
</script>

<style scoped lang="scss">
h5 {
  font-size: 18px;
}

.list {
  width: 60px;
  height: 75px;
  overflow: hidden;
  transform: rotate(120deg);
  margin: 60px;
}

.list_child {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(-60deg);
}

.list_child_child {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(-60deg);
  background-color: red;
}

.many {
  width: 400px;
  .list {
    float: left;
    margin: 1px;
    color: #333;
    line-height: 18px;
    em {
      display: block;
      padding-top: 20px;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
    }
    span {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
