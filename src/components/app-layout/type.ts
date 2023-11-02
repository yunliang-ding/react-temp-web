import { ReactNode } from 'react';
import type { PageHeaderProps, MenuProps } from 'antd';

export default interface ProLayout {
  layoutRef?: any;
  pathname?: string;
  children?: ReactNode;
  collapsed?: boolean;
  onCollapse?: Function;
  compact?: boolean;
  dark?: boolean;
  menu: MenuProps;
  title?: ReactNode;
  logo?: ReactNode;
  className?: string;
  waterMarkProps?: any;
  pageHeaderProps?: PageHeaderProps;
  rightContentRender: () => ReactNode;
  footerRender: () => ReactNode;
}
