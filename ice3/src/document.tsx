/* eslint-disable react/self-closing-comp */
/**
 * The page's HTML template structure, using JSX.
 */
import { Meta, Title, Links, Main, Scripts } from 'ice';
import { description } from '../package.json';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <link rel="stylesheet" type="text/css" href="https://react-core-form.oss-cn-beijing.aliyuncs.com/assets/react-core-form.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@arco-design/web-react@latest/dist/css/arco.min.css" />
        <script src="https://react-core-form.oss-cn-beijing.aliyuncs.com/assets/axios.min.js"></script>
        <script src="https://g.alicdn.com/code/lib/react/18.2.0/umd/react.production.min.js"></script>
        <script src="https://g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@arco-design/web-react@latest/dist/arco.min.js"></script>
        <script src="https://unpkg.com/@arco-design/web-react@latest/dist/arco-icon.min.js"></script>
        <script src="https://unpkg.com/react-color@3.0.0-beta.3/dist/react-color.min.js"></script>
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
