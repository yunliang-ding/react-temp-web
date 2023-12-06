import { useEffect } from 'react';
import useBreadCrumb from '@/hooks/useBreadCrumb';
import { Button } from '@arco-design/web-react';

const Page = () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      extra: <Button type="primary">刷新工作台</Button>,
    });
  }, []);
  return <span>我的工作台</span>;
};

Page.auth = '/workbench/my';

export default Page;
