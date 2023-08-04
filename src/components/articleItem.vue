<template>
  <view class="art-item">
    <view class="thumbnail">
      <img :src="article.thumbnailUrl" class="img" alt="" />
    </view>
    <view class="title">
      {{ article.title }}
    </view>
    <view class="author">
      {{ article.name }}
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.art-item {
  width: 270upx;
  padding: 30upx;
  background: #fff;
  border-radius: 8upx;
  margin-top: 30upx;

  .thumbnail {
    width: 270upx;
    height: 270upx;
    border-radius: 12upx;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    width: 270upx;
    font-size: 32upx;
    line-height: 44upx;
    height: 88upx;
    padding-top: 15upx;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    //文本超过俩行显示...
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .author {
    width: 100%;
    height: 44upx;
    line-height: 44upx;
    padding-top: 15upx;
    font-size: 15upx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #555500;
  }
}
</style>
