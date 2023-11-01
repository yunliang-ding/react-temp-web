import { useEffect } from 'react';
import Layout from './layout';
import Loading from '@/components/loading';
import Error from '@/components/error';
import NoPermissions from '@/pages/403';
import store from '@/store';
import { useAuth } from 'ice';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default (props: any) => {
  const [, setAuth] = useAuth();
  const [, userDispatchers] = store.useModel('user');
  const [uiState] = store.useModel('ui');
  useEffect(() => {
    userDispatchers.fetchUserInfo(setAuth);
  }, []);
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#25b864',
      },
    });
  }, []);
  let Vnode: any = null;
  if (uiState.status === 'loading') {
    Vnode = <Loading />;
  } else if (uiState.status === 'error') {
    Vnode = <Error />;
  } else if (uiState.status === 'noPermissions') {
    Vnode = <NoPermissions />;
  } else {
    Vnode = <Layout {...props} />;
  }
  return <ConfigProvider locale={zhCN}>{Vnode}</ConfigProvider>;
};
