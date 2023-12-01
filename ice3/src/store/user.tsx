/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { userInfo } from '@/services/common';
import { CreateStore } from 'react-core-form-store';
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

export default CreateStore({
  // 定义 model 的初始 state
  name: '',
  avatarUrl: '',
  roles: [],
  remoteUrl: '',
  menus: [], // 菜单
  // 定义处理该模型副作用的函数
  async fetchUserInfo(uiStore: any = {}) {
    try {
      // 查询 userInfo 获取详细信息
      const res = await userInfo();
      if (res.code === 200) {
        const auth = {}; // 权限集合
        recursion(res.data.menus, auth);
        Object.assign(this, res.data);
        uiStore.status = 'success';
      } else if (res.code !== 40005) {
        uiStore.status = 'error';
      }
      return res;
    } catch (error) {
      console.log(error);
      uiStore.status = 'error';
      return {};
    }
  },
});
