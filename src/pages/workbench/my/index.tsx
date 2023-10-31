import { useEffect } from 'react';
import useBreadCrumb from '@/hooks/useBreadCrumb';
import { Button } from 'antd';

const Page = () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      list: ['工作台', '我的工作台'],
      title: '我的工作台',
      extra: [<Button type="primary">刷新</Button>],
    });
  }, []);
  return <span>我的工作台</span>;
};
Page.pageConfig = {
  // 可选，配置准入权限，若不配置则代表所有角色都可以访问
  auth: ['我的工作台'],
};
export default Page;
