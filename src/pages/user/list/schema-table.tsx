/* eslint-disable no-console */
import { TableProps } from '@yl-d/components';
import formSchema from './schema-form';
import { getList, saveOrUpdate } from './services';

const tableSchema: TableProps = {
  title: '用户列表',
  scroll: {
    y: 'calc(100vh - 420px)',
  },
  searchSchema: {
    column: 3,
    schema: [
      {
        widget: 'Input',
        label: '用户姓名',
        name: 'name',
      },
      {
        widget: 'Select',
        label: '用户性别',
        name: 'sex',
        props: {
          options: [
            {
              label: '男',
              value: 0,
            },
            {
              label: '女',
              value: 1,
            },
          ],
        },
      },
    ],
  },
  columns: [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 125,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: 125,
      enums: ['男', '女'],
    },
    {
      title: '城市',
      dataIndex: 'city',
      width: 125,
    },
    {
      title: '签名',
      dataIndex: 'sign',
      width: 125,
      sorter: true,
    },
    {
      title: '登录次数',
      dataIndex: 'logins',
      width: 125,
    },
    {
      title: '分类',
      dataIndex: 'classify',
      width: 125,
    },
    {
      title: '分数',
      dataIndex: 'score',
      width: 125,
    },
  ],
  tools: [
    {
      label: '新增',
      modalFormProps: ({ onSearch }) => {
        return {
          title: '新增用户',
          schema: formSchema,
          async onSubmit() {
            const { code } = await saveOrUpdate();
            if (code === 200) {
              onSearch();
            } else {
              return Promise.reject();
            }
          },
        };
      },
    },
  ],
  rowOperations: {
    title: '操作',
    width: 100,
    menus(record) {
      return [
        {
          label: '编辑',
          modalFormProps: ({ onSearch }) => {
            return {
              title: '编辑用户',
              initialValues: record,
              schema: formSchema,
              async onSubmit() {
                const { code } = await saveOrUpdate();
                if (code === 200) {
                  onSearch();
                } else {
                  return Promise.reject();
                }
              },
            };
          },
        },
        {
          label: '删除',
          confirm: {
            type: 'pop',
            title: '是否确认删除',
          },
          async onClick() {
            console.log(record);
          },
        },
      ];
    },
  },
  request: async (params) => {
    const { code, list, total } = await getList(params);
    return {
      success: code === 200,
      list,
      total,
    };
  },
};

export default tableSchema;
