import LayoutProps from './type';
import './index.less';

export default ({
  compact = true,
  className,
  iconfontUrl = '',
  navTheme = 'light',
  location = '/',
  collapsed = false,
  menus = [],
  menusOnClick = () => {},
  waterMarkProps = {},
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
  headerContentRender = () => <div />,
  rightContentRender = () => <div />,
  footerRender = () => <div />,
  children = null,
}: LayoutProps) => {
  const classNames: string[] = ['app-layout'];
  if (className) {
    classNames.push(className);
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
            <div className="app-layout-left-menu">menu</div>
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
