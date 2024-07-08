import { Button, Table } from '@yl-d/components';
import tableSchema from './schema-table';

const Page = () => {
  return <Table {...tableSchema} />;
};

// 可选，配置准入权限，若不配置则代表所有角色都可以访问
Page.auth = '/user/list';

// 配置面包屑
Page.breadCrumb = {
  extra: <Button type="primary">新增用户</Button>,
}

export default Page;

