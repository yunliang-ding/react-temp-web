import AppLayout from '@/components/app-layout';
import { Dropdown, Menu, Space, Avatar, PageHeader, Input } from 'antd';
import store from '@/store';
import { LayoutProps } from '@/types';
import { Icon } from '@/util';
import AppBreadcrumb from '@/components/breadcrumb';
import FooterRender from './footer-render';
import HeaderRender from './header-render';
import { outLogin } from '@/services/common';
import './index.less';

export default ({ children, setTheme, theme }) => {
  const [uiState, uiDispatchers] = store.useModel('ui');
  const [userState] = store.useModel('user');
  const { dark, title, compact, collapsed }: LayoutProps = uiState;
  const setCollapsed = (v: boolean) => {
    uiDispatchers.update({
      collapsed: v,
    });
  };
  const { name, avatarUrl, menus } = userState;
  const logout = async () => {
    const { code } = await outLogin();
    if (code === 200) {
      location.reload();
    }
  };
  return (
    <AppLayout
      waterMarkProps={{
        rotate: -20,
        content: name,
        fontColor: 'rgba(0,0,0,.05)',
        fontSize: 16,
        gapY: 70,
        zIndex: 999,
      }}
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
      headerContentRender={() => (
        <HeaderRender
          compact={compact}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      )}
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
              type="icon-palette"
              style={{
                fontSize: 20,
                marginRight: 20,
                position: 'relative',
                top: 3,
                color: '#999',
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
      footerRender={() => <FooterRender />}
    >
      <PageHeader
        {...AppBreadcrumb.options()}
        breadcrumbRender={() => {
          if (compact) {
            return <div />;
          }
          return <AppBreadcrumb />;
        }}
      >
        {children}
      </PageHeader>
    </AppLayout>
  );
};
