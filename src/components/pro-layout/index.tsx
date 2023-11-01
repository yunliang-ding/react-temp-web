import LayoutProps from './type';
import './index.less';
import { Menu } from 'antd';

export default ({
  compact = true,
  className,
  navTheme = 'light',
  location = '/',
  collapsed = false,
  menu = {},
  // waterMarkProps = {},
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
  if (className) {
    classNames.push(className);
  }
  if (collapsed) {
    classNames.push('app-layout-collapsed');
  }
  if (compact) {
    classNames.push('app-layout-compact');
  }
  return (
    <div className={classNames.join(' ')}>
      {compact ? (
        <>
          <div className="app-layout-left">
            <div className="app-layout-left-logo">
              <a>
                {logo}
                <h1>{title}</h1>
              </a>
            </div>
            <div className="app-layout-left-menu">
              <Menu inlineIndent={16} mode="inline" {...menu} selectedKeys={[location]} />
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
          <div className="app-layout-header">header</div>
          <div className="app-layout-body">
            <div className="app-layout-sider">sider</div>
            <div className="app-layout-main">
              <div className="app-layout-right-content">{children}</div>
              <div className="app-layout-right-footer">footer</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
