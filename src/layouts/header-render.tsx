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
          style={{
            fontSize: 26,
            color: 'var(--antd-wave-shadow-color)',
            transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: '.3s',
          }}
        />
        <AppBreadcrumb />
      </div>
    );
  }
  return null;
};
