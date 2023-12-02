import { Navigate } from 'react-router-dom';
import UserList from '@/pages/user/list';
import DictList from '@/pages/dict/list';
import Workbench from '@/pages/workbench/my';
import NoMatch from '@/pages/404';
import Layout from './layouts';

export default [
  {
    path: '/',
    element: <Layout />,
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
