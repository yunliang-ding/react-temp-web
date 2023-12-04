import { Navigate } from 'react-router-dom';
import UserList from '@/pages/user/list';
import DictList from '@/pages/dict/list';
import Workbench from '@/pages/workbench/my';
import NoMatch from '@/pages/404';
import Layout from './layouts';


const a = require('/home/lighthouse/local/react-core-form-admin/src/pages/user/list/index.tsx')

console.log(a);

export default [
  {
    path: '/',
    element: <Layout />,
    loader: async () => {
      // dataLoader
      await new Promise(res => {
        setTimeout(res, 1000)
      });
      console.log('HHHH');
      return [];
    },
    children: [
      {
        path: '/',
        element: <Navigate to="/user/list" />,
      },
      {
        path: '/user/list',
        element: <UserList />,
      },
      {
        path: '/dict/list',
        element: <DictList />,
      },
      {
        path: '/workbench/my',
        element: <Workbench />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
];
