import { LayoutProps } from '@/types';

const initState: LayoutProps = {
  title: '通用项目模版',
  navTheme: 'light',
  status: 'loading',
  pathname: '',
  compact: true, // 紧凑模式
};

export default {
  // 定义 model 的初始 state
  state: {
    ...initState,
  },
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
