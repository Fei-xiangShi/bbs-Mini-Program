import SiteConfig from "@/config/requestUrl";
import { http } from "@/public/request";

const Url = {
  frontPage: "/frontPage",
  getArticleById: SiteConfig.passageUrl + "/",
  getArticleList: SiteConfig.passageUrl + "/articleList",
  getArticleListByCategory: SiteConfig.passageUrl + "/articleList/",
  searchArticle: SiteConfig.passageUrl + "/search",
  publishArticle: SiteConfig.passageUrl + "/publish",
  swuLogin: "/swuLogin",
  home: "/home",
  getMenu: "/menu",
  getClassTable: "/classTable",
};

const Api = {
  // 获取登录状态
  getJwtIsExpired: () => http.get("/", {}),
  // 获取首页数据
  frontPage: () => http.get(Url.frontPage, {}),
  // 获取帖子数据
  getArticleById: (id: number) => http.get(Url.getArticleById + id, { id: id }),
  getArticleList: (page: number) =>
    http.get(Url.getArticleList, { page: page }),
  getArticleListByCategory: (category: number, page: number) =>
    http.get(Url.getArticleListByCategory + category, {
      page: page,
    }),
  searchArticle: (method: "BY_ID" | "BY_AUTHOR_OR_TITLE", condition: string | number, page: number) =>
    http.get(Url.searchArticle, {
      method: method,
      condition: condition,
      page: page,
    }),
  publishArticle: (article: object) => http.post(Url.publishArticle, article),
  // 登录
  swuLogin: (accountPack: object) => http.post(Url.swuLogin, accountPack),
  // 获取用户信息
  home: () => http.get(Url.home, {}),
  // 获取菜单
  getMenu: () => http.get(Url.getMenu, {}),
  // 获取课程表
  getClassTable: () => http.get(Url.getClassTable, {}),
};

export default Api;
