<template>
  <div class="main">
    <div class="main-left">
      <div class="logo">logo</div>
      <div class="menu">
        <el-menu
          :default-active="curTabId + ''"
          background-color="#202427"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="(menu01, index01) in $store.state.menu" :key="menu01.id" :index="menu01.id + ''">
            <template slot="title">
              <i :class="menu01.icon"></i>
              <span>{{menu01.menu}}</span>
            </template>
            <el-menu-item-group v-for="(menu02, index02) in menu01.subMenu" :key="menu02.id">
              <el-menu-item :index="menu02.id + ''"
                @click="selectMenu(menu02)">{{menu02.menu}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main-right">
      <div class="main-nav">
        <div class="page-tab">
          <div class="tab-item"
            v-for="(tab, index) in pageTabs" :key="index"
            :class="{cur: curTabId === tab.id}"
            @click="selectTab(tab)">
            {{tab.menu}}
          </div>
        </div>
      </div>
      <div class="main-page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      pageTabs: [],
      curTabId: 0
    }
  },
  mounted() {
    this.$store.dispatch('getMenu');
  },
  methods: {
    selectMenu(menu) {
      this.$router.push(menu.path);

      this.curTabId = menu.id;

      //是否已经存在该菜单的tab
      let isExitTab = this.pageTabs.some(tab => tab.id === menu.id);
      if (!isExitTab) this.pageTabs.push(menu);
    },
    selectTab(tab) {
      this.curTabId = tab.id;
      this.$router.push(tab.path);
    }
  }
}
</script>

<style lang="less">
.main {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main-left {
    flex: 0 0 210px;
    background: #121212;
  }
  .main-right {
    /*这里需要设置一个宽度数值，防止内容里的elementUI table组件最外层无法获取正确100%宽度*/
    /*flex: 1;*/
    width: calc(100% - 210px);
    height: 100%;
  }
}
.logo {
  height: 80px;
  color: #fff;
}
.main-nav {
  height: 50px;
  box-shadow: 0 0 10px #000;
}
.page-tab {
  display: flex;
  height: 50px;
  line-height: 50px;
  .tab-item {
    padding: 0 12px;
    border-right: 1px solid #ddd;
    cursor: pointer;
    &.cur {
      border-bottom: 3px solid orange;
    }
  }
}
.main-page {
  overflow-y: auto;
  height: calc(100% - 50px);
}

.el-menu {
  border-right: 0;
}
</style>
