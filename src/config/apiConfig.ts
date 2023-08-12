import SiteConfig from "@/config/requestUrl";

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

export default Url;