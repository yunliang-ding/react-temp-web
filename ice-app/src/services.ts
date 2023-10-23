import { request } from 'ice';

export const outLogin = () => {
  return request.post('/user/logout');
};

export const fetchUserInfo = () => {
  return request.post('/user/info');
};
