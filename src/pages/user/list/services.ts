import { request } from 'lyr';

export const getList = async (params): Promise<any> => {
  return request.get('https://api-online.yunliang.cloud/lyr-design/table', {
    params,
  });
};

export const saveOrUpdate = async (): Promise<any> => {
  return { code: 200 };
};
