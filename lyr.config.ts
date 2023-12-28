import { defineConfig } from "lyr";

export default defineConfig({
  title: "中后台项目模版",
  favicon:
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/assets/favicon.ico",
  link: [
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.css",
  ],
  devScript: [
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/router.development.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-color.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/socket.io.min.js"
  ],
  buildScript: [
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/router.production.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-color.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.js",
    "https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/socket.io.min.js"
  ],
  ignoreRouter: ['schema-', 'component/', 'components/'],
});
