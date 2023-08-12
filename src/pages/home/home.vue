<template>
  {{ user }}
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";

import { ref } from "vue";

let user = ref(uni.getStorageSync("user"));
onLoad(() => {
  
});
</script>

<style />
