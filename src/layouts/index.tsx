import { useEffect } from 'react';
import Layout from './layout';
import Loading from '@/components/loading';
import Error from '@/components/error';
import NoPermissions from '@/pages/403';
import store from '@/store';
import { useAuth } from 'ice';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

const defaultPrimaryColor = '#4e61d4';

export default (props: any) => {
  const [, setAuth] = useAuth();
  const [, userDispatchers] = store.useModel('user');
  const [uiState] = store.useModel('ui');
  useEffect(() => {
    userDispatchers.fetchUserInfo(setAuth);
  }, []);
  const setTheme = (primaryColor: string) => {
    ConfigProvider.config({
      theme: {
        primaryColor,
      },
    });
  };
  useEffect(() => {
    setTheme(defaultPrimaryColor);
  }, []);
  let Vnode: any = null;
  if (uiState.status === 'loading') {
    Vnode = <Loading />;
  } else if (uiState.status === 'error') {
    Vnode = <Error />;
  } else if (uiState.status === 'noPermissions') {
    Vnode = <NoPermissions />;
  } else {
    Vnode = <Layout {...props} setTheme={setTheme} theme={defaultPrimaryColor} />;
  }
  return <ConfigProvider locale={zhCN}>{Vnode}</ConfigProvider>;
};
