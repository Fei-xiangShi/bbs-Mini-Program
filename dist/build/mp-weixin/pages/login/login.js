"use strict";const e=require("../../common/vendor.js"),a=require("../../public/request.js"),n=e.defineComponent({__name:"login",setup(n){const o=e.ref({account:"",password:""}),t=async()=>{const n=await a.LoginApi.swuLogin(o.value);"true"===n.header["1235d6"]?(e.index.setStorageSync("jwt",n.header["Set-Cookie"].split(";").find((e=>e.startsWith("doorKey=")))),e.index.switchTab({url:"/pages/index/index"})):e.index.showToast({title:"登录失败",icon:"none"})};return e.onLoad((()=>{e.index.getStorageSync("jwt")&&e.index.switchTab({url:"/pages/index/index"})})),(a,n)=>({a:o.value.account,b:e.o((e=>o.value.account=e.detail.value)),c:o.value.password,d:e.o((e=>o.value.password=e.detail.value)),e:e.o(t),f:e.o(t)})}});wx.createPage(n);