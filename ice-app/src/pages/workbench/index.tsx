import { useEffect } from "react";
import { history } from "ice";

export default () => {
  useEffect(() => {
    history?.replace("/workbench/my");
  }, []);
  return null;
};
