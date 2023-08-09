import SiteConfig from "@/config/requestUrl";

const request = (
  url: string,
  method: "GET" | "POST",
  data: string | object | ArrayBuffer
) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: SiteConfig.baseUrl + url,
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

const http = {
  get, post
}

export { http };
