import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routes';
import './golbal.less';

const App = () => {
  const element = createHashRouter(routes);
  return <RouterProvider router={element} />;
};

ReactDom.render(<App />, document.querySelector('#root'));
