import { Button } from 'antd';
import Marquee from 'react-fast-marquee';
import { Icon } from '@/util';

export default () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
      }}
    >
      <Icon
        type="icon-shengyin"
        style={{ color: 'var(--ant-primary-color)', fontSize: 20 }}
      />
      <div style={{ width: 'calc(100% - 100px)', fontWeight: 'bold' }}>
        <Marquee pauseOnHover gradient={false} delay={2}>
          xxx消息通知
        </Marquee>
      </div>
      <Button size="small" type="link">
        版本号 1.0.0
      </Button>
    </div>
  );
};
