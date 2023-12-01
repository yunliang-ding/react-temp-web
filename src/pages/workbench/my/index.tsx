import { useEffect } from 'react';
import useBreadCrumb from '@/hooks/useBreadCrumb';
import { Button } from '@arco-design/web-react';

const Page = () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      extra: <Button type="primary">刷新工作台12</Button>,
    });
  }, []);
  return <span>我的工作台</span>;
};

Page.pageConfig = {
  // 可选，配置准入权限，若不配置则代表所有角色都可以访问
  auth: ['我的工作台'],
};
export default Page;
