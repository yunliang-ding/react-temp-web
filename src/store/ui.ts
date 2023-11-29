import { LayoutProps } from '@/types';
import { CreateStore } from 'react-core-form-store';

export default CreateStore<LayoutProps>({
  title: '通用项目模版',
  primaryColor: '#165dff',
  status: 'loading',
  compact: true,
  dark: false,
});
