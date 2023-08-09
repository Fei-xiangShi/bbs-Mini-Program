<template>
  {{ user }}
</template>

<script setup lang="ts">

let user = uni.getStorageSync("user");

</script>

<style />
