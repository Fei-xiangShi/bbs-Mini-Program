<template>
  <view class="blackDrawer" />
  <view
    class="login-container"
    style="background-image: url(../../static/images/login/loginBackground.jpg)"
  >
    <view class="inner-container">
      <img class="user-img" src="../../static/images/login/userImg.png" />
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
        <u-checkbox-group direction="horizontal">
          <u-checkbox
            @change="changeAccessbility"
            shape="circle"
            active-color="green"
          />
          <view style="color: white">我已详细阅读并同意了用户协议</view>
        </u-checkbox-group>
        <button
          @tap="login"
          v-if="!isloading"
          :disabled="isAgree === false"
        />
        <u-loading-icon mode="semicircle" size="45" v-if="isloading" />
      </form>
      <view class="readMe"> </view>
      <view class="line" />
      <view class="login-passage">
        一处风声，看落花流萤，那粉色佳人，摇曳，摇曳。苍天赐予一个多情的梦，在花落之间。怎堪月痩影单，残风缠绵，好一个悲曲，绚烂绚烂。
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Api from "@/public/api";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import routes from "@/config/routes";
import initUser from "@/utils/initUser";

let isAgree = ref(false);

const changeAccessbility = () => {
  isAgree.value = !isAgree.value;
};

const credentials = ref({
  account: "",
  password: "",
});

let isloading = ref(false);
const login = async () => {
  isloading.value = true;
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
    isloading.value = false;
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
.login-passage {
  text-indent: 2rem;
}
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

.inner-container {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  bottom: 0px;
}

.user-img {
  margin-bottom: 40px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
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

.line {
  float: right;
  width: 30%;
  height: 0.5px;
  margin-top: 30px;
  background: rgb(208, 208, 208);
  position: relative;
  text-align: center;
  opacity: 0.8;
}

.login-passage {
  color: rgb(208, 208, 208);
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  font-weight: 70;
}
</style>
