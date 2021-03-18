<template>
  <div class="hand">
    <transition name="el-zoom-in-center">
      <div class="container" v-show="state">
        <div class="subtitle">
          <div class="lt">
            > SELECTED >STAT
          </div>
          <div class="rt">
            USR:M.KATSURAGI
          </div>
          <div class="main">
            <div class="text">
              <p> > DETONATION FUNCTION</p>
              <h5><em>READY</em> <I></I></h5>
            </div>
            <div class="logo">
              <img src="../assets/wille.png" height="208" width="219"/>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['state'],

}
</script>

<style lang="scss" scoped>
.hand {
  height: 400px;
  padding: 35px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
}

.container {
  width: 620px;
  height: 140px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  padding: 5px;

  .subtitle {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    color: #fff;

    .lt {
      width: 40%;
      height: 20px;
      float: left;;
      font-size: 12px;
      text-align: left;
      padding-left: 10px;
      line-height: 20px;
    }

    .rt {
      width: 40%;
      height: 20px;
      float: right;;
      font-size: 18px;
      text-align: right;
      padding-right: 10px;
      font-weight: bold;
    }
  }
}

.main {
  width: 600px;
  height: 90px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  background: #bd7f2a;
  color: #fff;
  border: 2px solid #fff;
  padding: 5px;
}

.text {
  width: 50%;
  float: left;
  font-weight: bold;

  p {
    margin: 0;
    padding-top: 10px;
    font-size: 20px;
    text-align: left;
  }

  h5 {
    margin: 0;
    font-size: 50px;
    text-align: left;

    em {
      font-style: normal;
      float: left;
    }

    i {
      width: 20px;
      height: 45px;;
      background: #fff;
      float: left;
      margin-top: 5px;
      margin-left: 10px;
      animation: myAnimation 1s infinite
    }

  }
}


.logo {
  float: right;
  img {
    width: 70px;
    height: 70px;
    float: right;
    margin-top: 10px;
  }
}

@keyframes myAnimation {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
</style>
