<template>
  <div class="login-container">
    <h1>登录页面</h1>
    <form @submit="login">
      <input v-model="credentials.account" type="text" placeholder="用户名" />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="密码"
      />
      <button type="submit" @click="login">登录</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { LoginApi } from "@/public/request";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const credentials = ref({
  account: "",
  password: "",
});

const login = async () => {
  const response: any = await LoginApi.swuLogin(credentials.value);
  if (response.header["1235d6"] === "true") {
    uni.setStorageSync(
      "jwt",
      response.header["Set-Cookie"]
        .split(";")
        .find((row: string) => row.startsWith("doorKey="))
    );
    uni.switchTab({
      url: "/pages/index/index",
    });
  } else {
    uni.showToast({
      title: "登录失败",
      icon: "none",
    });
  }
};

onLoad(() => {
  if (uni.getStorageSync("jwt")) {
    uni.switchTab({
      url: "/pages/index/index",
    });
  }
});
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
