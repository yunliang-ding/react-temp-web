import { ReactNode } from 'react';
import type { MenuProps } from 'antd';

export default interface ProLayout {
  location?: string;
  collapsed?: boolean;
  onCollapse?: Function;
  compact?: boolean;
  navTheme?: 'dark' | 'light';
  menus: MenuProps[];
  menusOnClick?: Function;
  title?: ReactNode;
  logo?: ReactNode;
  headerContentRender?: ReactNode;
  rightContentRender?: ReactNode;
  footerRender?: ReactNode;
  className?: string;
  children: ReactNode;
  iconfontUrl?: string;
  waterMarkProps?: any;
}
