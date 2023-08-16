<template>
  <view>
    <!-- 自定义导航栏 -->
    <view class="navBarBox">
      <!-- 状态栏占位 -->
      <view
        class="statusBar"
        :style="{ paddingTop: statusBarHeight + 'px' }"
      ></view>
      <!-- 真正的导航栏内容 -->

      <view class="navBar">
        <view class="open-side-bar" @tap="toggleSidebar">
          <image
            class="sidebar-icon"
            src="/static/icons/navbar/菜单.png"
            mode="scaleToFill"
          />
        </view>
        <view class="title-content">
          <image class="logo" src="/static/logo.png" mode="scaleToFill"></image>
        </view>
      </view>
    </view>
    <sidebar class="sidebar" v-if="showSidebar"></sidebar>
  </view>

  <view @tap="toggleSidebar" class="drawer" v-if="showSidebar"></view>
</template>

<script setup lang="ts">
import sidebar from "@/components/sidebar.vue";
import { ref } from "vue";

let statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
const showSidebar = ref(false);
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style lang="scss">
.navBarBox .navBar {
  padding: 3rpx 50rpx;
  padding-bottom: 8rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.navBarBox .navBar .title-content .logo {
  width: 82rpx;
  height: 82rpx;
  margin-right: 10rpx;
}

.navBarBox .navBar .sidebar-icon {
  top: 50%;
  position: relative;
  width: 40rpx;
  height: 40rpx;
  left: 0%;
}

.sidebar {
  width: 50%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  overflow: hidden;
}
.drawer {
  top: 0;
  position: absolute;
  width: 20000px;
  height: 20000px;
  background-color: gray;
  z-index: 20;
  opacity: 0.6;
}
</style>
