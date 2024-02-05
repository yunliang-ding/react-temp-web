import { Button } from '@arco-design/web-react';

const Page = () => {
  return <span>我的工作台</span>;
};

Page.auth = '/workbench/my';

// 配置面包屑
Page.breadCrumb = {
  extra: <Button type="primary">刷新工作台</Button>,
}

export default Page;
