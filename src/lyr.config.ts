import { defineConfig } from 'lyr-cli';

export default defineConfig({
  router: {
    ignore: ['schema-'],
  },
  bundleAnalyzer: {
    // host: '',
  },
  cdn: (mode) => {
    return mode === 'dev'
      ? [
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.css',
        ]
      : [
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
          'https://react-core-form.oss-cn-beijing.aliyuncs.com/cdn/react-core-form.min.css',
        ];
  },
  ossConfig: {
    bucket: 'react-core-form',
    region: 'oss-cn-beijing',
    accessKeyId: 'TFRBSTV0N1RZaU1QTGo1VlVQVVlETDEy',
    accessKeySecret: 'Nll5ck1BdG9xUktidHRHdkFPSk1GNkRadHROV2M3',
  },
  webpackConfig: (mode) => ({
    externals: {
      react: 'React',
      'react-dom': 'reactDOM',
    },
  }),
});
