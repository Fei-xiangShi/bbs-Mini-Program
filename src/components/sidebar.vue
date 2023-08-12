<template>
  <view class="sidebar">
    <view class="menu">
      <view class="menu-item" v-for="item in menuList" :key="item.id">
        <view :id="item.id" @tap="changeCategory">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import routes from "@/config/routes";
let menuList = uni.getStorageSync("menu") || [];

const changeCategory = (e: any) => {
  uni.setStorageSync("isViewing", e.target.id);
  uni.reLaunch({
    url: routes.bbs.path,
  });
};
</script>

<style lang="scss">
.sidebar {
  width: 50%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  .menu {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .menu-item {
      width: 100%;
      height: 100upx;
      display: flex;
      align-items: center;
      justify-content: center;
      .menu-item-text {
        font-size: 16upx;
        color: #333;
      }
    }
  }
}

</style>
