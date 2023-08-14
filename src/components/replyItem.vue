<template>
  <view class="reply-item">
    <view class="root">
      <view class="author">{{ reply.author.name }}</view>
      <view class="content">{{ reply.content }}</view>
      <u-button @tap="changeReplyBox">回复</u-button>
    </view>
    <view
      class="son"
      v-for="secondaryReply in secondaryReplyList.list"
      :key="secondaryReply.id"
    >
      <view class="author">{{ secondaryReply.author }}</view>
      <view class="content">{{ secondaryReply.content }}</view>
      <u-button @tap="getSecondaryReply">展开</u-button>
    </view>
  </view>
  <view class="replyToReply" v-if="showReplyBox">
    <view class="son">
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
  </view>
</template>

<script setup lang="ts">
import Api from "@/public/api";
import ReplyList from "@/model/replyList";
import { reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const props = defineProps({
  articleId: {
    type: Number,
    required: true,
  },
  reply: {
    type: Object,
    required: true,
  },
});

let showReplyBox = false;
const changeReplyBox = () => {
  showReplyBox = !showReplyBox;
};

const replyToReply = () => {
  console.log(props.reply);
  let res = Api.reply(props.reply.id, props.reply).then((res: any) => {
    console.log(res);
    if (res.statusCode === 200) {
      uni.showToast({
        title: "回复成功",
        icon: "none",
      });
    } else {
      uni.showToast({
        title: "回复失败: " + res.errMsg,
        icon: "none",
      });
    }
  });
};

let secondaryReplyList = reactive(new ReplyList());
const getSecondaryReply = () => {
  let res = Api.getSecondaryReplyList(
    props.articleId,
    secondaryReplyList.page,
    props.reply.id
  );
  concatenatingSecondaryReplyList(res);
};

const concatenatingSecondaryReplyList = (response: any) => {
  response.then((res: any) => {
    uni.stopPullDownRefresh();
    if (res.data && res.data.length > 0) {
      //每次请求页数加一
      secondaryReplyList.page++;
      secondaryReplyList.list = [...secondaryReplyList.list, ...res.data];
      return;
    }
    uni.showToast({
      title: "没有更多了",
      icon: "none",
    });
  });
};

onLoad(() => {
  getSecondaryReply();
});
</script>

<style lang="scss"></style>
