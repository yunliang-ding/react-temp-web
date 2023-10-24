/* eslint-disable no-console */
import { TableProps } from 'react-core-form';
import formSchema from './schema-form';
import { getList, saveOrUpdate } from './services';

const tableSchema: TableProps = {
  title: '用户列表',
  searchSchema: {
    column: 3,
    schema: [
      {
        type: 'Input',
        label: '用户姓名',
        name: 'name',
      },
      {
        type: 'Select',
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
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      enums: ['男', '女'],
    },
    {
      title: '个人职业',
      dataIndex: 'profession',
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
    },
    {
      title: '详细地址',
      dataIndex: 'address',
    },
    {
      title: '备注信息',
      dataIndex: 'note',
    },
  ],
  tools: [
    {
      label: '新增',
      modalFormProps: ({ onSearch }) => {
        return {
          title: '新增用户',
          schema: formSchema,
          async onSubmit(v) {
            const { code } = await saveOrUpdate(v);
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
    width: 160,
    menus(record) {
      return [
        {
          label: '编辑',
          modalFormProps: ({ onSearch }) => {
            return {
              title: '编辑用户',
              initialValues: record,
              schema: formSchema,
              async onSubmit(v) {
                const { code } = await saveOrUpdate(v);
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
    const { code, data } = await getList(params);
    return {
      success: code === 200,
      total: data.total,
      list: data.list,
    };
  },
};

export default tableSchema;
