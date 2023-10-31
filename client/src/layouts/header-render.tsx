import AppBreadcrumb from '@/components/breadcrumb';
import { Icon } from '@/util';

export default ({ compact, collapsed, setCollapsed }) => {
  if (compact) {
    return (
      <div
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Icon
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          type="icon-caidan"
          style={{ fontSize: 26 }}
        />
        <AppBreadcrumb />
      </div>
    );
  }
  return null;
};
