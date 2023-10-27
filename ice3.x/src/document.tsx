import { Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 antd pro scaffold" />
        <title>中后台项目模版</title>
        <link rel="icon" href="https://v3.ice.work/img/logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <script crossOrigin="" src="https://react-core-form.oss-cn-beijing.aliyuncs.com/assets/axios.min.js"></script>
        <script crossOrigin="" src="https://g.alicdn.com/code/lib/react/18.2.0/umd/react.production.min.js"></script>
        <script crossOrigin="" src="https://g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
