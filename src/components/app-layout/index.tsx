import LayoutProps from './type';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import WaterMark from './watermark';
import './index.less';

export default ({
  compact = true,
  className,
  dark = false,
  collapsed = false,
  menu = {},
  waterMarkProps,
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
  headerContentRender = () => null,
  rightContentRender = () => null,
  footerRender = () => null,
  children = null,
}: LayoutProps) => {
  const classNames: string[] = ['app-layout'];
  const [selectedKey, setSelectedKey] = useState('');
  const [openKeys, setOpenKeys] = useState(['']);
  // 监听浏览器前进回退
  const listen = () => {
    const path = location.hash.substring(1);
    const index = location.hash.substring(1).indexOf('?'); // 去除参数
    setSelectedKey(index === -1 ? path : path.substring(0, index));
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
  /** horizontal 模式的一级菜单 */
  const [hSelectedKey, setHSelectedKey] = useState('');
  return (
    <>
      <div className={classNames.join(' ')}>
        {compact ? (
          <>
            <div className="app-layout-left">
              <div className="app-layout-left-logo">
                <a>
                  {logo}
                  {!collapsed && <h1>{title}</h1>}
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
                {headerContentRender()}
                {rightContentRender()}
              </div>
              <div className="app-layout-right-content">{children}</div>
              <div className="app-layout-right-footer">{footerRender()}</div>
            </div>
          </>
        ) : (
          <>
            <div className="app-layout-header">
              <div className="app-layout-header-logo">
                <a>
                  {logo}
                  {!collapsed && <h1>{title}</h1>}
                </a>
              </div>
              <div className="app-layout-header-menu">
                <Menu
                  {...menu}
                  items={menu.items?.map((item: any) => {
                    delete item.children;
                    return item;
                  })}
                  mode="horizontal"
                  selectedKeys={[hSelectedKey]}
                />
              </div>
              <div className="app-layout-header-right">
                {rightContentRender()}
              </div>
            </div>
            <div className="app-layout-body">
              <div className="app-layout-body-sider">
                <div className="app-layout-body-sider-menu">
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
                <div className="app-layout-body-sider-footer">footer</div>
              </div>
              <div className="app-layout-body-main">
                <div className="app-layout-body-main-content">{children}</div>
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
