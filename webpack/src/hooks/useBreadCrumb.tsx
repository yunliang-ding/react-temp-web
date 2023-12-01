import store from '@/store/breadcrumb';
import { PageHeaderProps } from '@arco-design/web-react';
import { useEffect } from 'react';

export default (
  // 指定清空的属性、默认全部清空
  destroyProps: PageHeaderProps = {
    title: '',
    breadcrumb: undefined,
    extra: [],
  },
) => {
  useEffect(() => {
    return () => {
      Object.assign(store, destroyProps);
    };
  }, []);
  return {
    update: (options: PageHeaderProps) => {
      setTimeout(() => {
        Object.assign(store, options);
      }, 10);
    },
  };
};
