<template>
  <view class="blackDrawer"/>
  <view
    class="login-container"
    style="background-image: url(../../static/images/login/loginBackground.jpg)"
  >
    <form @submit="login">
      <input v-model="credentials.account" type="text" placeholder="用户名" />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="密码"
      />
      <button type="submit" @tap="login"/>
    </form>
  </view>
</template>

<script setup lang="ts">
import Api from "@/public/api";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import routes from "@/config/routes";
import initUser from "@/utils/initUser";

const credentials = ref({
  account: "",
  password: "",
});

const login = async () => {
  const response: any = await Api.swuLogin(credentials.value);
  if (response.header["1235d6"] === "true") {
    uni.setStorageSync(
      "jwt",
      response.header["Set-Cookie"]
        .split(";")
        .find((row: string) => row.startsWith("doorKey="))
    );
    initUser();
    uni.reLaunch({
      url: routes.index.path,
    });
  } else {
    uni.showToast({
      title: "登录失败",
      icon: "none",
    });
  }
};

onLoad(() => {
  initUser();
  if (uni.getStorageSync("jwtIsExpired") === false) {
    if (uni.getStorageSync("user")) {
      uni.reLaunch({
        url: routes.index.path,
      });
      return;
    }
    initUser();
    uni.reLaunch({
      url: routes.index.path,
    });
  }
});
</script>

<style>
.blackDrawer
{
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  border: 1px solid black;
  border-radius: 5%;
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  width: 60px;
  height: 60px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  background-image: url(../../static/icons/login/login.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;

}
</style>
