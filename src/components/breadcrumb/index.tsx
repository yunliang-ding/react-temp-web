import { Breadcrumb } from 'antd';
import store from '@/store';

const AppBreadcrumb: any = () => {
  const [breadcrumb]: any = store.useModel('breadcrumb');
  const [ui]: any = store.useModel('ui');
  return (
    <Breadcrumb style={{ paddingTop: ui.compact ? 0 : 6 }}>
      {breadcrumb.list.map((item: any) => {
        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

AppBreadcrumb.options = () => {
  const [breadcrumb]: any = store.useModel('breadcrumb');
  return breadcrumb;
};
export default AppBreadcrumb;
