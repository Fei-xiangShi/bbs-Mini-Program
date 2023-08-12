<template>
  <view @tap="refreshClassTable">刷新</view>
  <view class="json">{{ classTable }}</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Api from '@/config/apiConfig'

let classTable = ref(uni.getStorageSync('classTable'))

const refreshClassTable = () => {
  Api.getClassTable().then((res: any) => {
    uni.setStorageSync('classTable', res.data || [])
    classTable.value = res.data || []
  })
}


</script>

<style>
</style>
