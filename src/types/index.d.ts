export interface LayoutProps {
  title: string;
  pathname: string;
  status: 'login' | 'loading' | 'error' | 'noPermissions' | 'userDisabled';
  compact?: boolean;
  dark?: boolean;
}
