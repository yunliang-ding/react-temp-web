import { defineConfig } from 'lyr-cli';

import { version, name } from 'package.json';

interface ConfigProps {
  /** 文件路由配置 */
  router?: {
    ignore?: string[];
  };
  /** 是否开启资源包分析 */
  bundleAnalyzer?: {
    host: string
  },
  /** 开发环境 cdn */
  devCdn?: string[];
  /** 生产环境 cdn */
  buildCdn?: string[];
  /** oss 配置 */
  ossConfig?: {
    bucket: string;
    region: string;
    accessKeyId: string;
    accessKeySecret: string;
  };
  /** webpack 配置 */
  webpackConfig?: (mode: 'dev' | 'build') => {
    /** 剔除的包 */
    externals?: {
      [key: string]: string;
    };
  };
}

defineConfig({
  router: {
    ignore: ['schema-'],
  },
  devCdn: [
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.css',
  ],
  buildCdn: [
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.css',
  ],
  ossConfig: {
    bucket: 'react-core-form',
    region: 'oss-cn-beijing',
    accessKeyId: 'TFRBSTV0N1RZaU1QTGo1VlVQVVlETDEy',
    accessKeySecret: 'Nll5ck1BdG9xUktidHRHdkFPSk1GNkRadHROV2M3',
    version,
    name,
  },
  webpackConfig: (mode) => ({
    externals: {
      react: 'React',
      'react-dom': 'reactDOM',
    },
  }),
} as ConfigProps);
