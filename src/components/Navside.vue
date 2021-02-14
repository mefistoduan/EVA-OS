<template>
  <div>
    <el-row :class="[{ shortnav: isCollapse }, { longNav: !isCollapse }]">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          :collapse="isCollapse"
        >
         <el-menu-item index="/">
             <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu
            :index="nav.clmid"
            :route="nav.clmurl"
            v-for="nav in navs"
          >
            <template slot="title">
              <i :class="nav.clicon"></i>
              <span>{{ nav.clmname }}</span>
            </template>
            <el-menu-item-group v-for="(child, j) in nav.childs">
              <el-menu-item :index="child.clmid" :route="child.clmurl"
                >{{ child.clmname }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item @click="clickLogout" index="99">
            <i class="el-icon-arrow-left"></i>
            <span slot="title">退出登陆</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Navs from "../api/Navs";

export default {
  data() {
    return {
      wildState: 0,
      navs: [],
    };
  },
  props: ["isCollapse"],
  mounted() {
    this.getTableQuery();
  },
  methods: {
    handleSelect(i, s, t) {
      this.$emit("TabsAdd", i); //触发事件
    },
    getTableQuery() {
      // 菜单
      this.navs = Navs;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    clickLogout() {
      let that = this;
      that
        .$confirm("此操作将退出当前账号, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          localStorage.usercode = "";
          that.$router.push({ path: "/login", query: { status: 1 } });
        })
        .catch(() => {
          that.$message({
            showClose: true,
            message: "您已取消退出操作",
          });
        });
    },
  },
};
</script>
<style scoped>
.shortnav {
  position: absolute;
  width: 65px;
  top: 48px;
  bottom: 0;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  height: 100%;
  background: #3b3b3b;
}

.longNav {
  position: absolute;
  width: 320px;
  top: 48px;
  bottom: 0;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  height: 100%;
  background: #3b3b3b;
}

.el-col,
.el-menu {
  height: 100%;
  border-right: 0;
}

/deep/ .el-menu-item {
  background-color: rgba(255, 255, 255, 0) !important;
}

/deep/ .el-menu {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/deep/ .el-submenu__title {
  background: rgba(255, 255, 255, 0) !important;
}

.el-menu li:hover {
  background: #00599a;
}

/deep/ .el-menu-item:hover {
  background: #00599a !important;
}

.logout {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  height: 56px;
  /*line-height: 56px;*/
}

.logout:hover {
  background: rgb(67, 74, 80);
}

.littleLogo {
  float: left;
}

.icon-home {
  width: 18px;
  height: 18px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

.icon-location {
  width: 18px;
  height: 18px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

.icon-list {
  width: 18px;
  height: 22px;
  float: left;
  margin-top: 20px;
  background-size: 100% 100%;
}

.icon-equip {
  width: 18px;
  height: 22px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

.icon-qrcode {
  width: 18px;
  height: 18px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

.icon-setting {
  width: 18px;
  height: 18px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

.icon-logout {
  width: 18px;
  height: 18px;
  float: left;
  margin-top: 20px;
  background-size: 100%;
}

/deep/ .el-menu-item-group .el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}

/deep/ .el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
