import { defineConfig } from "@ice/app";
import request from "@ice/plugin-request";
import store from "@ice/plugin-store";
import auth from "@ice/plugin-auth";
import antd from "@ice/plugin-antd";
import watchPlugin from './watch-plugin';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === "production" ? "swc" : false;
const externals: any =
  process.env.NODE_ENV === "production"
    ? {
        react: "React",
        "react-dom": "ReactDOM",
        axios: "axios",
      }
    : {};
export default defineConfig(() => ({
  ssg: false,
  minify,
  plugins: [
    request(),
    store(),
    auth(),
    antd({
      // importStyle: true,
      theme: {
        "primary-color": "#4e61d4",
        "primary-background-color": "#4e61d4",
        "font-size-base": "12px",
        "font-size-small": "12px",
      },
    }),
    watchPlugin(),
  ],
  compileDependencies: false,
  codeSplitting: false,
  // externals,
}));
