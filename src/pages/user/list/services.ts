import { request } from 'lyr';

export const getList = async (params): Promise<any> => {
  return request.get('http://api-online.yunliang.cloud/react-core-form/table', {
    params,
  });
};

export const saveOrUpdate = async (): Promise<any> => {
  return { code: 200 };
};
