import { Outlet, history, useLocation } from "ice";
import ProLayout, { PageContainer, WaterMark } from "@ant-design/pro-layout";
import AvatarDropdown from "@/components/avatar-dropdown";
import store from "@/store";
import { iconUrl, Icon } from "@/util";
import AppBreadcrumb from "@/components/breadcrumb";
import AlertNotice from "@/components/alert-notice";
import { useState } from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "./index.less";

export default function Layout() {
  const location = useLocation();
  const [userState] = store.useModel("user");
  const [uiState] = store.useModel("ui");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ConfigProvider locale={zhCN}>
      <WaterMark
        {...{
          rotate: -20,
          content: userState.name,
          fontColor: "rgba(0,0,0,.05)",
          fontSize: 16,
          gapY: 70,
          zIndex: 999,
        }}
      >
        <ProLayout
          menu={{ defaultOpenAll: true }}
          collapsed={collapsed}
          fixSiderbar
          onCollapse={setCollapsed}
          logo={
            <Icon
              type="icon-model"
              style={{ fontSize: 20, position: "relative", top: 3 }}
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
          rightContentRender={() => (
            <AvatarDropdown
              avatarUrl={userState.avatarUrl}
              userName={userState.name}
            />
          )}
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
      </WaterMark>
    </ConfigProvider>
  );
}
