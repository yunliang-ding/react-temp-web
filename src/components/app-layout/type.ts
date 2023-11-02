import { ReactNode } from 'react';
import type { PageHeaderProps, MenuProps } from 'antd';

export default interface ProLayout {
  location?: string;
  collapsed?: boolean;
  onCollapse?: Function;
  compact?: boolean;
  dark?: boolean;
  menu: MenuProps;
  title?: ReactNode;
  logo?: ReactNode;
  className?: string;
  children: ReactNode;
  waterMarkProps?: any;
  pageHeaderProps?: PageHeaderProps;
  rightContentRender: () => ReactNode;
  footerRender: () => ReactNode;
}
