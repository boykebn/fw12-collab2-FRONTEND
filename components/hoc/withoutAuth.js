/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const withoutAuth = (Components) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const token = useSelector((state) => state?.auth?.token);
    let role;
    token ? ({ role } = jwt_decode(token)) : false;
    React.useEffect(() => {
      if (token) {
        router.replace("/dashboard-admin");
      } else if (role === "1") {
        router.replace("/product");
      }
    }, [token]);
    return <Components {...props} />;
  };
};

export default withoutAuth;
