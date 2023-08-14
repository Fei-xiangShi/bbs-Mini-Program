<template>
    <view class="reply-item">
      <form>
        <u-input
          v-model="reply.content"
          placeholder="请输入回复内容"
          maxlength="100"
        ></u-input>
      </form>
    </view>
    <view class="replyToReply">
      <u-button @tap="replyToReply">回复</u-button>
    </view>
  </template>
  
  <script setup lang="ts">
  import Api from "@/public/api";
  
  const props = defineProps({
    reply: {
      type: Object,
      required: true,
    },
  });
  
  const replyToReply = () => {
    Api.reply(props.reply.id, props.reply).then((res: any) => {
      if (res.statusCode === 200) {
        uni.showToast({
          title: "回复成功",
          icon: "none",
        });
      } else {
        uni.showToast({
          title: "回复失败: " + res.data,
          icon: "none",
        });
      }
    });
  };
  </script>
  
  <style lang="scss"></style>
  