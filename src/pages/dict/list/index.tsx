import { useEffect } from 'react';
import useBreadCrumb from '@/hooks/useBreadCrumb';
import { Button } from '@arco-design/web-react';

const Page = () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      extra: <Button>刷新字典</Button>,
    });
  }, []);
  return <span>dict</span>;
};

Page.auth = '/dict/list';

export default Page;
