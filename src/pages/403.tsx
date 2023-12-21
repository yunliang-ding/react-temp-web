import { Result } from '@arco-design/web-react';

export default () => {
  return (
    <Result
      status="403"
      title="暂无权限"
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
      }}
    />
  );
};
