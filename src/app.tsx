import { runApp } from '@/.app';

runApp({
  /** 节点 */
  element: '#root',
  /** 权限 */
  auth: ['/admin/list']
});