/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect } from 'react';
import Layout from './layout';
import Loading from '@/components/loading';
import Error from '@/components/error';
import uiStore from '@/store/ui';
import userStore from '@/store/user';
import { generate, getRgbStr } from '@arco-design/color';

/** 支持 socket */
export const socket = window.io(location.origin);

socket.on('opend', (data) => {
  console.log(`%c 建立 socket ${data}`, 'color:green;');
});

export default () => {
  const { fetchUserInfo } = userStore.useSnapshot();
  const { dark, status } = uiStore.useSnapshot();
  useEffect(() => {
    fetchUserInfo(uiStore);
  }, []);
  useEffect(() => {
    if (dark) {
      // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme');
    }
  }, [dark]);
  // 更新主题
  const setTheme = (newColor: string | undefined) => {
    const newList = generate(newColor, {
      list: true,
      dark,
    });
    newList.forEach((l, index) => {
      const rgbStr = getRgbStr(l);
      document.body.style.setProperty(`--arcoblue-${index + 1}`, rgbStr);
    });
    uiStore.primaryColor = newColor;
  };
  useEffect(() => {
    setTheme(uiStore.primaryColor);
  }, [uiStore.primaryColor]);
  let Vnode: any = null;
  if (status === 'loading') {
    Vnode = <Loading />;
  } else if (status === 'error') {
    Vnode = <Error />;
  } else {
    Vnode = <Layout />;
  }
  return Vnode;
};
