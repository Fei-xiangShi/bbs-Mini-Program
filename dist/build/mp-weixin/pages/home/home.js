"use strict";const e=require("../../common/vendor.js"),a=require("../../public/request.js"),t=require("../../model/userInfo.js"),n=e.defineComponent({__name:"home",setup(n){const o=e.reactive(new t.User);return e.onLoad((async()=>{await a.UserApi.home().then((e=>{console.log(e),o.userInfo.id=e.data.id,o.userInfo.name=e.data.name,o.userInfo.accountId=e.data.accountId,o.userInfo.studentId=e.data.studentId,o.userInfo.gmtCreate=e.data.gmtCreate,o.userInfo.gmtModified=e.data.gmtModified,o.userInfo.siteAdmin=e.data.siteAdmin,o.userInfo.avatarUrl=e.data.avatarUrl,o.userInfo.bio=e.data.bio,o.userInfo.email=e.data.email}))})),(a,t)=>({a:e.t(o.userInfo)})}});wx.createPage(n);