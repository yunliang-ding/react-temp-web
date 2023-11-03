/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { userInfo } from '@/services/common';
import { Icon } from '@/util';

const recursion = (menus: any, auths: any) => {
  menus?.forEach((menu: any) => {
    /** 删除多余的属性 */
    delete menu.createUser;
    delete menu.updateUser;
    delete menu.createTime;
    delete menu.updateTime;
    delete menu.crudId;
    delete menu.disabled;
    delete menu.appId;
    delete menu.parentId;
    menu.key = menu.path;
    menu.label = menu.name;
    menu.icon = <Icon type={menu.icon} />;
    if (menu.children?.length > 0) {
      recursion(menu.children, auths);
    } else {
      delete menu.children;
      auths[menu.name] = true;
    }
  });
};

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
  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async fetchUserInfo(setAuth) {
      try {
        // 查询 userInfo 获取详细信息
        const { code, data } = await userInfo();
        if (code === 200) {
          const auth = {}; // 权限集合
          recursion(data.menus, auth);
          setAuth(auth);
          dispatch.user.update({
            ...data,
          });
          dispatch.ui.update({
            status: 'success',
          });
        } else if (code !== 40005) {
          dispatch.ui.update({
            status: 'error',
          });
        }
      } catch (error) {
        console.log(error);
        dispatch.ui.update({
          status: 'error',
        });
      }
    },
  }),
};
