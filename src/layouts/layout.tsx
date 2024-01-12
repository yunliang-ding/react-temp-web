/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { AppLayout } from 'lyr-design';
import { Dropdown, Menu, Space, Avatar, ColorPicker } from '@arco-design/web-react';
import uiStore from '@/store/ui';
import userStore from '@/store/user';
import breadcrumbStore from '@/store/breadcrumb';
import Footer from './footer';
import { outLogin } from '@/services';
import { useEffect, useRef } from 'react';
import {
  IconInteraction,
  IconMoon,
  IconSun,
} from '@arco-design/web-react/icon';
import { Outlet } from 'react-router-dom';

export default () => {
  const layoutRef: any = useRef({});
  const breadcrumb = breadcrumbStore.use();
  const { dark, title, compact, collapsed, primaryColor } = uiStore.use();
  const { name, avatarUrl, menus } = userStore.use();
  const setCollapsed = (v: boolean) => {
    uiStore.collapsed = v;
  };
  // 使用 AppLayout 内置的 监听 hash 方法
  useEffect(() => {
    const removeListener = layoutRef.current.listenHashChange(
      ({ currentBreadcrumb }) => {
        /** 设置当前路由的默认面包屑 */
        breadcrumbStore.title = currentBreadcrumb.title;
        breadcrumbStore.breadcrumb = currentBreadcrumb.breadcrumb;
      },
    );
    return removeListener;
  }, []);
  return (
    <AppLayout
      layoutRef={layoutRef}
      waterMarkProps={{
        gap: [200, 200],
        content: `welcome-${name}`,
        zIndex: 10,
        fontStyle: {
          color: dark ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)',
          fontSize: 12,
        },
      }}
      compact={compact}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      title={title}
      dark={dark}
      menu={{
        items: menus,
        onClick: ({ path }: any) => {
          location.hash = path;
        },
      }}
      rightContentRender={() => (
        <div className="app-right-header">
          <Space size={20}>
            {dark ? (
              <IconSun
                onClick={() => {
                  uiStore.dark = false;
                }}
              />
            ) : (
              <IconMoon
                onClick={() => {
                  uiStore.dark = true;
                }}
              />
            )}
            <IconInteraction
              onClick={() => {
                uiStore.compact = !compact;
              }}
            />
            <ColorPicker
              size="mini"
              defaultValue={primaryColor}
              onChange={(newColor) => {
                uiStore.primaryColor = newColor;
              }}
            />
            <Avatar size={32}>
              <img alt="avatar" src={avatarUrl} />
            </Avatar>
            <Dropdown
              position="bottom"
              droplist={
                <Menu>
                  <Menu.Item key="logout" onClick={outLogin}>
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
      footerRender={() => <Footer />}
      siderFooterRender={() => null}
    >
      <Outlet />
    </AppLayout>
  );
};
