/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const withAuthUser = (Components) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const token = useSelector((state) => state?.auth?.token);
    let role;
    token ? ({ role } = jwt_decode(token)) : false;
    React.useEffect(() => {
      if (!token) {
        router.replace("/login");
      }
    }, [token]);
    return <Components {...props} />;
  };
};

export default withAuthUser;
