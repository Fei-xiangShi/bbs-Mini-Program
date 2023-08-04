<template>
  <view class="article-box">
    <articleItem
      v-for="item in artList.list"
      :key="item.id"
      :article="item"
    ></articleItem>
  </view>
</template>

<script setup lang="ts">
import articleItem from "@/components/articleItem.vue";
import { ArticleApi } from "@/public/request";
import { onLoad, onReachBottom, onPullDownRefresh } from "@dcloudio/uni-app";
import { reactive } from "vue";
import { ArticleList } from "@/model/articleList";

const artList = reactive(new ArticleList());
const getlist = () => {
  ArticleApi.getArticleList(artList.page).then((res: any) => {
    uni.stopPullDownRefresh();
    if (res.data && res.data.length > 0) {
      //每次请求页数加一
      artList.page++;
      artList.list = [...artList.list, ...res.data];
      return;
    }

    uni.showToast({
      title: "没有更多了",
      icon: "none",
    });
  });
};
onLoad(() => {
  getlist();
});

onReachBottom(() => {
  getlist();
});

onPullDownRefresh(() => {
  artList.list = [];
  artList.page = 1;
  getlist();
});
</script>

<style lang="scss" scoped>
.article-box {
  width: 690upx; 
  padding: 10upx 30upx;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
