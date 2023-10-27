import { useEffect } from "react";
import { history } from "ice";

export default () => {
  useEffect(() => {
    history?.replace("/user/list");
  }, []);
  return null;
};
