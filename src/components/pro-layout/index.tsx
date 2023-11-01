import LayoutProps from './type';
import './index.less';

export default ({
  compact = true,
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
  headerContentRender = () => null,
  rightContentRender = () => null,
  footerRender = () => null,
  className,
  iconfontUrl = '',
  children = null,
}: LayoutProps) => {
  const classNames: string[] = ['pro-lapout'];
  if (className) {
    classNames.push(className);
  }
  if (compact) {
    classNames.push('pro-lapout-compact');
  }
  return (
    <div className={classNames.join(' ')}>
      {compact ? (
        <>
          <div className="pro-lapout-left">sider</div>
          <div className="pro-lapout-right">
            <div className="pro-lapout-right-header">header</div>
            <div className="pro-lapout-right-content">{children}</div>
            <div className="pro-lapout-right-footer">footer</div>
          </div>
        </>
      ) : (
        <>
          <div className="pro-lapout-header">header</div>
          <div className="pro-lapout-body">
            <div className="pro-lapout-sider">sider</div>
            <div className="pro-lapout-main">
              <div className="pro-lapout-right-content">{children}</div>
              <div className="pro-lapout-right-footer">footer</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
