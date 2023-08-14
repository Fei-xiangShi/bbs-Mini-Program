<template>
  <view class="blackDrawer" />
  <view
    class="login-container"
    style="background-image: url(../../static/images/login/loginBackground.jpg)"
  >
    <view class="inner-container">
      <img class="user-img" src="../../static/images/login/userImg.png"/>
      <!-- <view class="decoration-text">你是我的，我是你的谁</view> -->
      <form @submit="login">
        <input
          v-model="credentials.account"
          type="text"
          placeholder="用户名"
          placeholder-style="color:black;"
        />
        <input
          v-model="credentials.password"
          type="password"
          placeholder="密码"
          placeholder-style="color:black;"
        />
        <button type="submit" @tap="login" />
      </form>
    </view>
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
.blackDrawer {
  pointer-events: none; /* 允许与位于其下方的内容进行交互 */
  z-index: 1; /* 将遮罩层放置在内容上方 */
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

.inner-container{
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  bottom: 100px;
}

.user-img{
  margin-bottom: 40px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
}

.decoration-text{
  
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  border: 1px solid black;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 20px;
  padding: 5px;
  width: 180px;
  height: 10px;
  background-color: white;
  color: black;
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
