const baseUrl = "http://localhost:8080";
const passageUrl = "/passage";

const request = (
  url: string,
  method: "GET" | "POST",
  data: string | object | ArrayBuffer
) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      method,
      data,
      header: {
        "Cookie": uni.getStorageSync("jwt"),
      },
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

const get = (url: string, data: string | object | ArrayBuffer) => {
  return request(url, "GET", data);
};

const post = (url: string, data: string | object | ArrayBuffer) => {
  return request(url, "POST", data);
};

const RequestApi = {
  // 获取首页数据
  frontPage: () => get("/frontPage", {}),
}

const ArticleApi = {
  getArticleById: (id: string) => get(passageUrl + id, {}),
  getArticleList: (page: number) => get(passageUrl + "/articleList", {page: page.toString()}),
  getArticleListByCategory: (category: string, page: number) => post(passageUrl + "/articleList/" + category, page.toString()),
  searchArticle: (method: number, condition: string) => post(passageUrl + '/search', {method: method, condition: condition}),
}

const LoginApi = {
  swuLogin: (accountPack: object) => post("/swuLogin", accountPack),
}

const UserApi = {
  home: () => get("/home", {}),
}

export { RequestApi, ArticleApi, LoginApi, UserApi };
