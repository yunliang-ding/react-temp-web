declare module "*.less" {
  const content: any;
  export default content;
}

interface Window {
  io: Function;
}

interface LayoutProps {
  title: string;
  status: 'login' | 'loading' | 'error';
  dark?: boolean;
  collapsed?: boolean;
  primaryColor?: string;
  layout: string;
}
