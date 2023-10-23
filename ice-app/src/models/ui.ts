export interface LayoutProps {
  title: string;
  pathname: string;
  navTheme: 'light' | 'realDark' | undefined;
  status: 'login' | 'loading' | 'error' | 'noPermissions'
  layout: any;
}

export default {
  state: {} as LayoutProps,
  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
};
