module.exports = {
  index: `import ReactDom from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layouts/index";
import ErrorBoundary from "@/pages/error-boundary";
import router from "./router";
import AuthRouter from "./auth";

const store = {
  auth: [''],
};

const App = () => {
  const element = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: router.map((item) => ({
        ...AuthRouter(item),
        errorElement: <ErrorBoundary />,
      })),
    },
  ]);
  return <RouterProvider router={element} />;
};

export const getAuth = () => {
  return store.auth;
}

export const runApp = ({ element = "#root", auth = [''] }) => {
  store.auth = auth;
  ReactDom.render(<App />, document.querySelector(element));
};
  `,
  auth: `import NoMatch from "../pages/404";
import NoAuthority from "../pages/403";
import { getAuth } from "./index";

export default ({ path, component }: { path: string; component: any }) => {
  if (path === "/404") {
    return {
      path: "*",
      element: <NoMatch />,
    };
  }
  return {
    path,
    element:
      getAuth().includes(component.type.auth) ||
      component.type.auth === undefined ? (
        component
      ) : (
        <NoAuthority />
      ),
  };
};
  `,
};
