import { defineConfig } from '@ice/app';
import request from '@ice/plugin-request';
import auth from '@ice/plugin-auth';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;

export default defineConfig(() => ({
  // Set your configs here.
  ssg: false,
  minify,
  compileDependencies: false,
  codeSplitting: false,
  plugins: [
    request(),
    auth(),
    {
      setup: ({ onGetConfig }) => {
        onGetConfig((config) => {
          config.useDevServer = false;
        });
      },
    },
  ],
  server: {
    onDemand: true,
    format: 'esm',
  },
  externals: {
    // axios: 'axios',
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-color': 'ReactColor',
    // '@arco-design/web-react/icon': 'arcoicon',
    // '@arco-design/web-react': 'arco',
  },
}));
