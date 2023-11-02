import AppLayout from '@/components/app-layout';
import { Dropdown, Menu, Space, Avatar, Input } from 'antd';
import store from '@/store';
import { LayoutProps } from '@/types';
import { getBreadcrumbByMenus, Icon } from '@/util';
import FooterRender from './footer-render';
import { outLogin } from '@/services/common';
import { useEffect, useState } from 'react';
import './index.less';

export default ({ children, setTheme, theme }) => {
  const [pathname, setPathName] = useState('');
  const [uiState, uiDispatchers] = store.useModel('ui');
  const [breadcrumb, breadcrumbDispatch] = store.useModel('breadcrumb');
  const [userState] = store.useModel('user');
  const { dark, title, compact, collapsed }: LayoutProps = uiState;
  const { name, avatarUrl, menus } = userState;
  const setCollapsed = (v: boolean) => {
    uiDispatchers.update({
      collapsed: v,
    });
  };
  const logout = async () => {
    const { code } = await outLogin();
    if (code === 200) {
      location.reload();
    }
  };
  // 监听浏览器前进回退
  const listen = () => {
    const path = location.hash.substring(1);
    const index = location.hash.substring(1).indexOf('?'); // 去除参数
    const pathName = index === -1 ? path : path.substring(0, index);
    const clearPath: string[] = pathName.split('/').filter(Boolean);
    setPathName(`/${clearPath.join('/')}`);
    /** 设置当前路由的默认面包屑 */
    breadcrumbDispatch.update(getBreadcrumbByMenus(menus, clearPath));
  };
  useEffect(() => {
    listen();
    window.addEventListener('hashchange', listen);
    return () => {
      window.removeEventListener('hashchange', listen);
    };
  }, []);
  return (
    <AppLayout
      pathname={pathname}
      waterMarkProps={{
        content: name,
      }}
      compact={compact}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      title={title}
      dark={dark}
      menu={{
        items: menus,
        onClick: ({ item }: any) => {
          location.hash = item.props.path;
        },
      }}
      rightContentRender={() => (
        <div className="app-right-header">
          <Space>
            <Icon
              type={dark ? 'icon-suntaiyang' : 'icon-dark'}
              style={{
                fontSize: 20,
                marginRight: 20,
                position: 'relative',
                top: 3,
                color: '#999',
              }}
              onClick={() => {
                uiDispatchers.update({
                  dark: !dark,
                });
              }}
            />
            <Input
              type="color"
              defaultValue={theme}
              style={{ padding: 4, width: 32, marginRight: 20 }}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
            <Icon
              type="icon-setting"
              style={{
                fontSize: 20,
                marginRight: 20,
                position: 'relative',
                top: 3,
                color: '#666',
              }}
              onClick={() => {
                uiDispatchers.update({
                  compact: !compact,
                });
              }}
            />
            <Avatar size={32} src={avatarUrl} />
            <Dropdown
              placement="bottom"
              overlay={
                <Menu>
                  <Menu.Item
                    onClick={logout}
                    icon={
                      <Icon type="icon-tuichudenglu" style={{ fontSize: 18 }} />
                    }
                  >
                    退出登录
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                style={{
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                }}
              >
                {name}
              </a>
            </Dropdown>
          </Space>
        </div>
      )}
      pageHeaderProps={breadcrumb}
      footerRender={() => <FooterRender />}
    >
      {children}
    </AppLayout>
  );
};
