export interface LayoutProps {
  title: string;
  pathname: string;
  navTheme: 'light' | 'dark' ;
  status: 'login' | 'loading' | 'error' | 'noPermissions' | 'userDisabled';
  compact?: boolean;
}
