<template>
  <view class="json">{{ classTable }}</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let classTable = ref(uni.getStorageSync('classTable'))

</script>

<style>
</style>
