<template>
  <view class="article">
    <view class="title">{{ article.title }}</view>
    <view class="content">{{ article.content }}</view>
    <view class="modify" @tap="navToArticlePublishPage">修改</view>
  </view>
  <view class="comment"></view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import routes from "@/config/routes";
import apiConfig from "@/config/apiConfig";
import Article from "@/model/article";
import { ref } from "vue";

const navToArticlePublishPage = () => {
  uni.navigateTo({
    url:
      routes.articlePublish.path +
      "?" +
      routes.articlePublish.query +
      "=" +
      articleId,
  });
};

let articleId = 0;
let article = ref(new Article());

onLoad((option) => {
  articleId = option?.articleId;
  apiConfig.getArticleById(articleId).then((res: any) => {
    if (res.statusCode === 200) {
      article.value = res.data;
    } else {
      uni.showToast({
        title: "获取文章失败: " + res.data,
        icon: "none",
      });
    }
  });
});
</script>

<style lang="scss"></style>
