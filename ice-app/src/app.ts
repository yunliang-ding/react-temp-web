import { defineAppConfig, defineDataLoader, definePageConfig } from "ice";
import { fetchUserInfo } from "@/services";
import { defineAuthConfig } from "@ice/plugin-auth/types";
import { defineStoreConfig } from "@ice/plugin-store/types";
import { defineRequestConfig } from "@ice/plugin-request/types";
import { notification } from "antd";

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  router: {
    type: "hash",
  },
}));

export const pageConfig = definePageConfig(() => ({
  links: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://example.com/some/styles.css',
    // },
  ],
  scripts: [
    {
      // src: 'https://example.com/some/index.js',
    },
  ],
}));

export const authConfig = defineAuthConfig(async (appData) => {
  const { user = {} } = appData;
  const auth = {}; // 权限集合
  const recursion = (menuList, auths) => {
    menuList?.forEach((menu) => {
      if (menu.children?.length > 0) {
        recursion(menu.children, auths);
      } else {
        auths[menu.name] = true;
      }
    });
  };
  recursion(user.menus, auth);
  return {
    initialAuth: auth,
  };
});

export const storeConfig = defineStoreConfig(async (appData) => {
  const { user = {}, ui = {} } = appData;
  return {
    initialStates: {
      user,
      ui,
    },
  };
});

export const requestConfig = defineRequestConfig(() => ({
  withFullResponse: false,
  baseURL: "http://center.yunliang.cloud/",
  timeout: 1000 * 60,
  withCredentials: true,
  maxContentLength: 5000,
  validateStatus(status) {
    return status >= 200 && status < 510;
  },
  // 拦截器
  interceptors: {
    request: {
      onConfig: (requestConfig) => {
        requestConfig.headers = {
          appId: 11,
        };
        return requestConfig;
      },
      onError: (error) => {
        return Promise.reject({
          returnCode: "500",
          returnMsg: error,
          returnData: {},
        });
      },
    },
    response: {
      onConfig: (response) => {
        // 对响应数据做点什么
        const {
          data: { code, msg },
        } = response;
        if (code === 40005) {
          // 登录信息失效，之后重新登录
          location.href = `http://ulp.yunliang.cloud?redirect=${
            location.href
          }&appId=${11}`;
          return response;
        }
        if (code === 200) {
          return response;
        }
        if (code !== 200) {
          notification.error({
            message: "提示",
            description: msg || "接口异常",
          });
        }
        return response;
      },
      onError: (error) => {
        // 对响应错误做点什么
        return Promise.reject({
          returnCode: "500",
          returnMsg: error,
          returnData: {},
        });
      },
    },
  },
}));

export const dataLoader = defineDataLoader(async () => {
  try {
    const { code, data } = await fetchUserInfo();
    if (code === 200) {
      return {
        user: data,
        ui: {
          status: "success",
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      user: {},
      ui: {
        status: "error",
      },
    };
  }
  return {};
});
