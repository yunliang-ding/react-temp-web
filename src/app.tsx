import ReactDom from 'react-dom';
import Layout from '@/layouts';
import router from '@/.app/router';
import AuthRouter from '@/components/auth';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './golbal.less';

const App = () => {
  const element = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: router.map((item) => AuthRouter(item)),
    },
  ]);
  return <RouterProvider router={element} />;
};

ReactDom.render(<App />, document.querySelector('#root'));
