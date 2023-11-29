/* eslint-disable radix */
/* eslint-disable prefer-template */
import { useEffect } from 'react';
import Layout from './layout';
import Loading from '@/components/loading';
import Error from '@/components/error';
import NoPermissions from '@/pages/403';
import { useStore } from 'react-core-form-store';
import uiStore from '@/store/ui';
import userStore from '@/store/user';
import { useAuth } from 'ice';

export default (props: any) => {
  const [, setAuth] = useAuth();
  const { fetchUserInfo } = useStore(userStore);
  const { dark, status } = useStore(uiStore);
  useEffect(() => {
    fetchUserInfo(setAuth, uiStore);
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
  let Vnode: any = null;
  if (status === 'loading') {
    Vnode = <Loading />;
  } else if (status === 'error') {
    Vnode = <Error />;
  } else if (status === 'noPermissions') {
    Vnode = <NoPermissions />;
  } else {
    Vnode = <Layout {...props} />;
  }
  return Vnode;
};
