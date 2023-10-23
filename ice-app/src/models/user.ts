/* eslint-disable no-console */

export default {
  // 定义 model 的初始 state
  state: {
    name: '',
    avatarUrl: '',
    roles: [],
    remoteUrl: '',
    menus: [], // 菜单
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
