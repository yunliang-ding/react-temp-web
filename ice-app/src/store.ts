import { createStore } from 'ice';
import user from '@/models/user';
import ui from '@/models/ui';
import breadcrumb from '@/models/breadcrumb';

export default createStore({
  user,
  ui,
  breadcrumb,
});
