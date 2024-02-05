import { Button } from '@arco-design/web-react';

const Page = () => {
  console.log('render dict')
  return <span>dict</span>;
};

Page.auth = '/dict/list';

// 配置面包屑
Page.breadCrumb = {
  extra: <Button type="primary">刷新字典</Button>,
}

export default Page;
