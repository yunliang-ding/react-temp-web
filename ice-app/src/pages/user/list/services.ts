export const getList = async (data = {}): Promise<any> => {
  await new Promise((res) => setTimeout(res, 1000));
  return {
    code: 200,
    data: {
      total: 2,
      list: [
        {
          name: "测试001",
          sex: 0,
          profession: "开发",
          phone: "17236723672",
          address: "杭州市西湖区",
          note: "这个是备注信息",
        },
        {
          name: "测试002",
          sex: 1,
          profession: "测试",
          phone: "17236728923",
          address: "杭州市西湖区",
          note: "这个是备注信息",
        },
      ],
    },
  };
};

export const saveOrUpdate = async (data = {}): Promise<any> => {
  return {};
};
