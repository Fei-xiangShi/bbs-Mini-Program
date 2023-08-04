<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  let res = uni.getStorageSync("menuButtonBoundingClientRect");
  if (!res) {
    res = uni.getMenuButtonBoundingClientRect();
    uni.setStorageSync("menuButtonBoundingClientRect", res);
  }
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
@import "../node_modules/uview-plus/index.scss";
</style>
