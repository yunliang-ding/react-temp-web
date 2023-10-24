import useBreadCrumb from "@/hooks/useBreadCrumb";
import { useEffect } from "react";

export default () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      list: ["工作台", "我的工作台"],
      title: "我的工作台",
    });
  }, []);
  return <div>my</div>
}