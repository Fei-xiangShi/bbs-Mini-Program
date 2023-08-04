<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import ArticleItem from "./components/articleItem.vue";
onLaunch(() => {
  let res = uni.getStorageSync("menuButtonBoundingClientRect");
  if(!res) {
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
<style></style>
