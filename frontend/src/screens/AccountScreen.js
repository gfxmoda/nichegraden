import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import AccountForm from "../components/AccountForm";
import Dashboard from "../components/Dashboard";

const AccountScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [userInfo]);

  return (
    <>
      {userInfo ? <Dashboard /> : <AccountForm />}
    </>
  );
};

export default AccountScreen;
