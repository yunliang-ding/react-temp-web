/* eslint-disable no-param-reassign */
/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import { Notification } from '@arco-design/web-react';
import axios from 'axios';
import NProgress from 'nprogress';

export const APPID = 11;

NProgress.configure({
  showSpinner: false,
  minimum: 0.3,
  easing: 'ease-in-out',
});

const requestInterceptors = function (requestConfig) {
  requestConfig.headers = {
    appId: APPID.toString(),
  };
  NProgress.start();
  return requestConfig;
};

const responseInterceptors = function (response) {
  // 对响应数据做点什么
  NProgress.done();
  const {
    data: { code, msg },
  } = response;
  if (code === 40005) {
    // 登录信息失效，之后重新登录
    location.href = `http://ulp.yunliang.cloud/login?redirect=${location.href}&appId=${APPID}`;
    return response;
  }
  if (code !== 200) {
    Notification.error({
      title: '提示',
      content: msg || '接口异常',
    });
  }
  return response.data;
};

const request = axios.create({
  timeout: 1000 * 180,
  withCredentials: true,
  maxContentLength: 5000,
  validateStatus: () => true,
});

request.interceptors.request.use(requestInterceptors);
request.interceptors.response.use(responseInterceptors);

export default request;
