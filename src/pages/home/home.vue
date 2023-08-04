<template>
  {{ user.userInfo }}
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { UserApi } from "@/public/request";
import { User } from "@/model/userInfo";
import { reactive } from "vue";

const user = reactive(new User());
onLoad(async () => {
  await UserApi.home().then((res: any) => {
    console.log(res);
    user.userInfo.id = res.data.id;
    user.userInfo.name = res.data.name;
    user.userInfo.accountId = res.data.accountId;
    user.userInfo.studentId = res.data.studentId;
    user.userInfo.gmtCreate = res.data.gmtCreate;
    user.userInfo.gmtModified = res.data.gmtModified;
    user.userInfo.siteAdmin = res.data.siteAdmin;
    user.userInfo.avatarUrl = res.data.avatarUrl;
    user.userInfo.bio = res.data.bio;
    user.userInfo.email = res.data.email;
  });
});
</script>

<style />
