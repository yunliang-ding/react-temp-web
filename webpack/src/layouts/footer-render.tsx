import { Button } from '@arco-design/web-react';
import Marquee from 'react-fast-marquee';
import { Icon } from '@/util';

export default () => {
  return (
    <>
      <Icon
        type="icon-shengyin"
        style={{ color: 'rgb(var(--primary-6))', fontSize: 20 }}
      />
      <div style={{ width: 'calc(100% - 100px)', fontWeight: 'bold' }}>
        <Marquee pauseOnHover gradient={false} delay={2}>
          介绍：xxx消息通知
        </Marquee>
      </div>
      <Button size="small" type="text">
        版本号 1.0.0
      </Button>
    </>
  );
};
