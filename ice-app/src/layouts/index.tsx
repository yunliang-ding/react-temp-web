import Layout from './layout';
import Loading from '@/components/loading';
import Error from '@/components/error';
import NoPermissions from '@/components/403';
import store from '@/store';

export default (props: any) => {
  const [uiState] = store.useModel('ui');
  if (uiState.status === 'loading') {
    return <Loading />;
  }else if (uiState.status === 'error') {
    return <Error />;
  } else if (uiState.status === 'noPermissions') {
    return <NoPermissions />;
  }
  return <Layout {...props} />;
};
