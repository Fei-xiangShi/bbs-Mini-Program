<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import Api from "@/config/apiConfig";
import { http } from "./public/request";

onLaunch(() => {
  let safetop = uni.getStorageSync("menuButtonBoundingClientRect");
  if (!safetop) {
    safetop = uni.getMenuButtonBoundingClientRect();
    uni.setStorageSync("menuButtonBoundingClientRect", safetop);
  }
  console.log("App Launch");

  Api.getMenu().then((res: any) => {
    uni.setStorageSync("menu", res.data || []);
  });
  uni.setStorageSync("category", 0);
  let classTable = uni.getStorageSync("classTable");
  if (!classTable) {
    Api.getClassTable().then((res: any) => {
      uni.setStorageSync("classTable", res.data || []);
    });
  }
});
onShow(() => {
  let jwtIsExpired = false;
  async function checkJwt() {
    await http.get("/", {}).then((res: any) => {
      if (res.statusCode === 200) {
        jwtIsExpired = false;
      } else {
        jwtIsExpired = true;
      }
      uni.setStorageSync("jwtIsExpired", jwtIsExpired);
    });
  }
  checkJwt();
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
@import "../node_modules/uview-plus/index.scss";
</style>
