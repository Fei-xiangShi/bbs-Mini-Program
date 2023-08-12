<template>
  <view>
    <sidebar class="sidebar" v-if="showSidebar"></sidebar>
    <u-button
      @tap="toggleSidebar"
      color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      >打开侧边栏</u-button
    >
  </view>

  <view @tap="toggleSidebar" class="drawer" v-if="showSidebar"></view>
  
</template>

<script setup lang="ts">
import sidebar from "@/components/sidebar.vue";
import { ref } from "vue";

const showSidebar = ref(false);
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
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
