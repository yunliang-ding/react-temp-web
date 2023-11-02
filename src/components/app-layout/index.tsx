/* eslint-disable max-len */
import LayoutProps from './type';
import { Menu, PageHeader } from 'antd';
import { useEffect, useState } from 'react';
import WaterMark from './watermark';
import Breadcrumb from './breadcrumb';
import './index.less';

const Icon = ({ color, onClick, style }) => (
  <span style={style} onClick={onClick}>
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        d="M896 853.333333H128v-85.333333h768v85.333333z m42.666667-490.666666l-196.096 196.096-60.330667-60.330667L818.005333 362.666667 682.24 226.901333l60.330667-60.330666L938.666667 362.666667zM512 554.666667H128v-85.333334h384v85.333334z m0-298.666667H128V170.666667h384v85.333333z"
        fill={color}
      />
    </svg>
  </span>
);

export default ({
  compact = true,
  className,
  dark = false,
  collapsed = false,
  onCollapse = () => {},
  menu = {},
  waterMarkProps,
  pageHeaderProps = {},
  title = '默认应用标题',
  logo = (
    <img
      src="https://v2.ice.work/img/logo.png"
      style={{
        width: 32,
        height: 32,
      }}
    />
  ),
  rightContentRender = () => null,
  footerRender = () => null,
  children = null,
}: LayoutProps) => {
  const classNames: string[] = ['app-layout'];
  const [selectedKey, setSelectedKey] = useState('');
  /** horizontal 模式的一级菜单 */
  const [topKey, setTopKey] = useState('');
  const [openKeys, setOpenKeys] = useState(['']);
  // 监听浏览器前进回退
  const listen = () => {
    const path = location.hash.substring(1);
    const index = location.hash.substring(1).indexOf('?'); // 去除参数
    const pathname = index === -1 ? path : path.substring(0, index);
    setSelectedKey(pathname);
    setTopKey(`/${pathname.split('/').filter(Boolean)[0]}`);
  };
  useEffect(() => {
    listen();
    window.addEventListener('hashchange', listen);
    return () => {
      window.removeEventListener('hashchange', listen);
    };
  }, []);
  if (className) {
    classNames.push(className);
  }
  if (collapsed) {
    classNames.push('app-layout-collapsed');
  }
  if (dark) {
    classNames.push('app-layout-dark');
  }
  if (compact) {
    classNames.push('app-layout-compact');
  }
  /** 包裹业务路由 */
  const content = (
    <PageHeader
      {...pageHeaderProps}
      title={pageHeaderProps.title || <div />}
      breadcrumbRender={() => {
        if (compact) {
          return <div />;
        }
        return <Breadcrumb breadcrumb={pageHeaderProps.breadcrumb} />;
      }}
    >
      {children}
    </PageHeader>
  );
  return (
    <>
      <div className={classNames.join(' ')}>
        {compact ? (
          <>
            <div className="app-layout-left">
              <div className="app-layout-left-logo">
                <a>
                  {logo}
                  <h1 hidden={collapsed}>{title}</h1>
                </a>
              </div>
              <div className="app-layout-left-menu">
                <Menu
                  {...menu}
                  inlineIndent={16}
                  mode="inline"
                  selectedKeys={[selectedKey]}
                  openKeys={openKeys}
                  onOpenChange={(v) => {
                    setOpenKeys(v);
                  }}
                  inlineCollapsed={collapsed}
                  theme={dark ? 'dark' : 'light'}
                />
              </div>
            </div>
            <div className="app-layout-right">
              <div className="app-layout-right-header">
                <div
                  hidden={!compact}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Icon
                    onClick={() => {
                      onCollapse(!collapsed);
                    }}
                    color="var(--ant-primary-color)"
                    style={{
                      display: 'flex',
                      transform: collapsed
                        ? 'rotateY(0deg)'
                        : 'rotateY(180deg)',
                      transition: '.3s',
                    }}
                  />
                  <Breadcrumb breadcrumb={pageHeaderProps.breadcrumb} />
                </div>
                {rightContentRender()}
              </div>
              <div className="app-layout-right-content">{content}</div>
              <div className="app-layout-right-footer">{footerRender()}</div>
            </div>
          </>
        ) : (
          <>
            <div className="app-layout-header">
              <div className="app-layout-header-logo">
                <a>
                  {logo}
                  <h1>{title}</h1>
                </a>
              </div>
              <div className="app-layout-header-menu">
                <Menu
                  {...menu}
                  // 这里只渲染一级菜单
                  items={menu.items?.map((item: any) => {
                    return {
                      ...item,
                      children: undefined,
                    };
                  })}
                  mode="horizontal"
                  multiple={false}
                  selectedKeys={[topKey]}
                />
              </div>
              <div className="app-layout-header-right">
                {rightContentRender()}
              </div>
            </div>
            <div className="app-layout-body">
              <div className="app-layout-body-sider">
                <div className="app-layout-body-sider-menu">
                  {/* 这里渲染当前一级菜单下面的子菜单 */}
                  <Menu
                    {...menu}
                    items={
                      (menu.items?.find((item) => item?.key === topKey) as any)
                        ?.children
                    }
                    inlineIndent={16}
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={(v) => {
                      setOpenKeys(v);
                    }}
                    inlineCollapsed={collapsed}
                    theme={dark ? 'dark' : 'light'}
                  />
                </div>
                <div className="app-layout-body-sider-footer">
                  <Icon
                    onClick={() => {
                      onCollapse(!collapsed);
                    }}
                    color="var(--ant-primary-color)"
                    style={{
                      display: 'flex',
                      transform: collapsed
                        ? 'rotateY(0deg)'
                        : 'rotateY(180deg)',
                      transition: '.3s',
                    }}
                  />
                </div>
              </div>
              <div className="app-layout-body-main">
                <div className="app-layout-body-main-content">{content}</div>
                <div className="app-layout-body-main-footer">
                  {footerRender()}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {waterMarkProps && <WaterMark {...waterMarkProps} />}
    </>
  );
};
