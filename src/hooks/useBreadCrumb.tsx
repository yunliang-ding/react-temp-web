import store from '@/store';
import { PageHeaderProps } from 'antd';
import { useEffect } from 'react';

export default (
  // 指定清空的属性、默认全部清空
  destroyProps: PageHeaderProps = {
    title: null,
    footer: null,
    extra: null,
    breadcrumb: undefined,
  },
) => {
  const [, breadcrumbDispatcher] = store.useModel('breadcrumb');
  useEffect(() => {
    return () => {
      breadcrumbDispatcher.update(destroyProps);
    };
  }, []);
  return {
    update: (options: PageHeaderProps) => {
      setTimeout(() => {
        breadcrumbDispatcher.update(options);
      })
    },
  };
};
