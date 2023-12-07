import { request } from '@/.app';

export const getList = async (): Promise<any> => {
  return request.get('http://api-online.yunliang.cloud/react-core-form/table');
};

export const saveOrUpdate = async (): Promise<any> => {
  return { code: 200 };
};
