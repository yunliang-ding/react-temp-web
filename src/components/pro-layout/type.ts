import { ReactNode } from 'react';
import type { MenuProps } from 'antd';

export default interface ProLayout {
  location?: string;
  collapsed?: boolean;
  onCollapse?: Function;
  compact?: boolean;
  navTheme?: 'dark' | 'light';
  menu: MenuProps;
  title?: ReactNode;
  logo?: ReactNode;
  className?: string;
  children: ReactNode;
  waterMarkProps?: any;
  headerContentRender: () => ReactNode;
  rightContentRender: () => ReactNode;
  footerRender: () => ReactNode;
}
