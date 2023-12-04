import NoMatch from '@/pages/404';
import NoAuthority from '@/components/403';

const userAuth = ['/user/list', '/workbench/my']; // 假设用户只有这两个权限

export default ({ path, component }: { path: string; component: any }) => {
  if (path === '/404') {
    return {
      path: '*',
      element: <NoMatch />,
    };
  }
  return {
    path,
    element:
      userAuth.includes(component.type.auth) ||
      component.type.auth === undefined ? (
        component
      ) : (
        <NoAuthority />
      ),
  };
};
