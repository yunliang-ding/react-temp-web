import { Result } from '@arco-design/web-react';

export default () => {
  return (
    <Result
      status="404"
      title="资源不存在"
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
      }}
    />
  );
};
