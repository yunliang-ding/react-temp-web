import { defineConfig } from "@ice/app";
import request from "@ice/plugin-request";
import store from "@ice/plugin-store";
import auth from "@ice/plugin-auth";
import antd from "@ice/plugin-antd";

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === "production" ? "swc" : false;
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
        'primary-color': '#4e61d4',
        "primary-background-color": "#4e61d4",
        "font-size-base": "12px",
        "font-size-small": "12px",
      },
    }),
  ],
  compileDependencies: false,
  codeSplitting: false,
}));
