import { LayoutProps } from '@/types';
import { create } from 'react-core-form-store';

export default create<LayoutProps>({
  title: '通用项目模版',
  primaryColor: '#165dff',
  status: 'loading',
  compact: true,
  dark: false,
});
