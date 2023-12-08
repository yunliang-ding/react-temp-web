import { request } from 'lyr';

export const outLogin = (): Promise<{
  code: number;
  data: any;
}> => {
  return request.post('/user/logout');
};

export const userInfo = () => {
  return request.post('/user/info');
};
