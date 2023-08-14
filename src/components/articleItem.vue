<template>
  <view class="art-item" @tap="showDetail">
    <view class="title">{{ article.title }}</view>
    <view class="info">
      <view class="author">{{ article.author.name }}</view>
      <view class="date">{{ article.gmtCreate }}</view>
      <view class="comments">{{ article.commentCount }}</view>
    </view>
    <view class="image-container">
      <img :src="article.thumbnailUrl" alt="Image" />
    </view>
  </view>
</template>

<script setup lang="ts">
import routes from "@/config/routes";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const showDetail = () => {
  uni.navigateTo({
    url:
      routes.articleDetail.path +
      "?" +
      routes.articleDetail.query +
      "=" +
      props.article.id,
  });
};
</script>

<style lang="scss"></style>
