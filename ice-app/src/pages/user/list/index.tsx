import { useEffect } from "react";
import useBreadCrumb from "@/hooks/useBreadCrumb";
import tableSchema from './schema-table';
import { Table } from 'react-core-form';
import { definePageConfig } from "ice";

export default () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      list: ["用户管理", "用户列表"],
      title: "用户列表",
    });
  }, []);
  return <Table {...tableSchema} />;
};

export const pageConfig = definePageConfig(() => ({
  auth: ["用户列表"],
}));
