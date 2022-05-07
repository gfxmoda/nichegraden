import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { activateThenLogin } from "../actions/userActions";

const VerificationScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      const token =
        location.pathname.split("/")[location.pathname.split("/").length - 1];
      dispatch(activateThenLogin(token));
    } else {
      // redirect
      history.push("/account");
    }
  }, [userInfo, history, dispatch, location]);

  return null;
};

export default VerificationScreen;
