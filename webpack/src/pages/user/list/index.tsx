import { Table } from 'react-core-form';
import tableSchema from './schema-table';

// const Page = () => {
//   return <Table {...tableSchema} />;
// };

// Page.pageConfig = {
//   // 可选，配置准入权限，若不配置则代表所有角色都可以访问
//   auth: ['用户列表'],
// };

export default () => {
  return <Table {...tableSchema} />;
};
