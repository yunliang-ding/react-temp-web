import { request } from 'lyr';

export const outLogin = () => {
  localStorage.removeItem("token");
  location.reload();
};

export const userInfo = () => {
  return request.post('/user/info');
};
