import { useState } from "react";
import { Outlet, history, useLocation } from "ice";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { iconUrl, Icon } from "@/util";
import AppBreadcrumb from "@/components/breadcrumb";
import AlertNotice from "@/components/alert-notice";
import store from "@/store";
import { Dropdown } from "antd";
import { outLogin } from "@/services";
import "./index.less";

export default function Layout() {
  const location = useLocation();
  const [userState] = store.useModel("user");
  const [uiState] = store.useModel("ui");
  const [collapsed, setCollapsed] = useState(false);
  const logout = async () => {
    const { code } = await outLogin();
    if (code === 200) {
      window.location.reload();
    }
  };
  return (
    <ProLayout
      locale={"zh-CN"}
      waterMarkProps={{
        rotate: -20,
        content: userState.name,
        fontColor: "rgba(0,0,0,.05)",
        fontSize: 16,
        gapY: 70,
        zIndex: 999,
      }}
      menu={{ defaultOpenAll: true }}
      collapsed={collapsed}
      fixSiderbar
      onCollapse={setCollapsed}
      logo={
        <Icon
          type="icon-model"
          style={{ fontSize: 20 }}
        />
      }
      iconfontUrl={iconUrl}
      title={uiState.title}
      navTheme={uiState.navTheme}
      splitMenus
      fixedHeader
      layout="mix"
      location={{
        pathname: location.pathname,
      }}
      token={{
        header: {
          colorBgMenuItemSelected: "#f0f5ff",
          colorTextMenuSelected: "#4e61d4"
        },
      }}
      avatarProps={{
        size: "small",
        src: userState.avatarUrl,
        title: userState.name,
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "logout",
                    icon: (
                      <Icon type="icon-tuichudenglu" style={{ fontSize: 18 }} />
                    ),
                    label: "退出登录",
                    onClick: logout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: "center",
              paddingBlockStart: 12,
            }}
          >
            <div>© 2023 Made with love</div>
            <div>by Ant Design</div>
          </div>
        );
      }}
      menuDataRender={() => userState.menus}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return (
          <a
            onClick={() => {
              history?.push(item.path as string);
            }}
          >
            {defaultDom}
          </a>
        );
      }}
      footerRender={() => <AlertNotice />}
    >
      <PageContainer
        {...AppBreadcrumb.options()}
        breadcrumbRender={() => {
          return <AppBreadcrumb />;
        }}
      >
        <Outlet />
      </PageContainer>
    </ProLayout>
  );
}
