import { defineAppConfig, defineDataLoader } from 'ice';
import { defineAuthConfig } from '@ice/plugin-auth/types';
import { defineRequestConfig } from '@ice/plugin-request/types';
import { Notification } from '@arco-design/web-react';
import userStore from '@/store/user';
import NoAuth from '@/components/403';
import { Icon } from '@/util';

const APPID = 11; // 具体的应用ID

const recursion = (menus: any, auths: any) => {
  menus?.forEach((menu: any) => {
    /** 删除多余的属性 */
    delete menu.createUser;
    delete menu.updateUser;
    delete menu.createTime;
    delete menu.updateTime;
    delete menu.crudId;
    delete menu.disabled;
    delete menu.appId;
    delete menu.parentId;
    menu.label = menu.name;
    menu.icon = <Icon type={menu.icon} />;
    if (menu.children?.length > 0) {
      recursion(menu.children, auths);
    } else {
      delete menu.children;
      auths[menu.name] = true;
    }
  });
};

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  router: {
    type: 'hash',
  },
}));

export const authConfig = defineAuthConfig(async (appData) => {
  const { user = {} } = appData;
  const auth = {}; // 权限集合
  recursion(user.menus, auth);
  return {
    initialAuth: auth,
    NoAuthFallback: () => {
      return <NoAuth />;
    },
  };
});

export const dataLoader = defineDataLoader(async () => {
  const { code, data } = await userStore.fetchUserInfo();
  return {
    user: code === 200 ? data : {},
  };
});

export const requestConfig = defineRequestConfig(() => ({
  withFullResponse: false,
  baseURL: '/',
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
          appId: APPID,
        };
        return requestConfig;
      },
      onError: (error) => {
        return Promise.reject({
          returnCode: '500',
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
          location.href = `http://ulp.yunliang.cloud?redirect=${location.href}&appId=${APPID}`;
          return response;
        }
        if (code === 200) {
          return response;
        }
        if (code !== 200) {
          Notification.error({
            title: '提示',
            content: msg || '接口异常',
          });
        }
        return response;
      },
      onError: (error) => {
        // 对响应错误做点什么
        return Promise.reject({
          returnCode: '500',
          returnMsg: error,
          returnData: {},
        });
      },
    },
  },
}));
