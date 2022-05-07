import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { login, register } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

const AccountForm = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: loadingReg, error: errorReg, userInfo } = userRegister;

  const [accountAction, setAccountAction] = useState("login");

  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [addMe, setAddMe] = useState(false);

  const [loginActivitiy, setLoginActivity] = useState("login");
  const [registerActivitiy, setRegisterActivity] = useState("");

  const loginSwitch = () => {
    if (accountAction !== "login") {
      setAccountAction("login");
      setLoginActivity("login");
      setRegisterActivity(null);
    }
  };

  const regSwitch = () => {
    if (accountAction !== "register") {
      setAccountAction("register");
      setRegisterActivity("register");
      setLoginActivity(null);
    }
  };

  const emailLogHandler = (e) => {
    setEmailLog(e.target.value);
  };
  const passwordLogHandler = (e) => {
    setPasswordLog(e.target.value);
  };

  const emailRegHandler = (e) => {
    setEmailReg(e.target.value);
  };
  const passwordRegHandler = (e) => {
    setPasswordReg(e.target.value);
  };

  const RememberMeHandler = (checkbox) => {
    if (checkbox.checked) {
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  };
  const addMeHandler = (checkbox) => {
    if (checkbox.checked) {
      setAddMe(true);
    } else {
      setAddMe(false);
    }
  };

  // login handler
  const submitLogHandler = (e) => {
    e.preventDefault();
    dispatch(login(emailLog, passwordLog));
    setEmailLog("");
    setPasswordLog("");
  };

  // register handler
  const submitRegHandler = (e) => {
    e.preventDefault();
    dispatch(register(emailReg, passwordReg));
    setEmailReg("");
    setPasswordReg("");
  };

  useEffect(() => {
    // console.log(accountAction);
  }, [accountAction]);

  return (
    <div className="account-form">
      <div className="container">
        {loading && <Loader />}
        {loadingReg && <Loader />}
        {error && <Message body={error} />}
        {errorReg && <Message body={errorReg} />}
        {userInfo && userInfo.message && <Message body={userInfo.message} />}
        <div className="account-content">
          <div className="handlers">
            <span
              onClick={loginSwitch}
              className={loginActivitiy && "active-handler"}
            >
              <h4>login</h4>
            </span>
            <span
              onClick={regSwitch}
              className={registerActivitiy && "active-handler"}
            >
              <h4>register</h4>
            </span>
          </div>
          <div className="form-body">
            {accountAction === "login" ? (
              <form onSubmit={submitLogHandler}>
                <input
                  type="text"
                  placeholder="your email address *"
                  onChange={emailLogHandler}
                  value={emailLog}
                />
                <input
                  type="password"
                  placeholder="your password *"
                  onChange={passwordLogHandler}
                  value={passwordLog}
                />
                <div>
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    onChange={RememberMeHandler}
                    value={rememberMe}
                  />
                  <label htmlFor="remember-me">{` Remember me`}</label>
                </div>
                <button
                  type="submit"
                  className="add-to-cart"
                  onClick={submitLogHandler}
                >
                  {accountAction}
                </button>
                <Link to="/lost-password">Lost your password?</Link>
              </form>
            ) : accountAction === "register" ? (
              <form onSubmit={submitRegHandler}>
                <input
                  type="text"
                  placeholder="your email address *"
                  onChange={emailRegHandler}
                  value={emailReg}
                />
                <input
                  type="password"
                  placeholder="your password *"
                  onChange={passwordRegHandler}
                  value={passwordReg}
                />
                <div>
                  <input
                    type="checkbox"
                    id="add-me"
                    name="add-me"
                    onChange={addMeHandler}
                    value={addMe}
                  />
                  <label htmlFor="add-me">
                    {` Yes, add me to your mailing list`}
                  </label>
                </div>
                <button
                  type="submit"
                  className="add-to-cart"
                  onClick={submitRegHandler}
                >
                  {accountAction}
                </button>
                <span className="disclaimer">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <Link to="/privacy-policy">privacy policy</Link>.
                </span>
              </form>
            ) : (
              ""
            )}
            <div className="external-login-btn">
              <div className="or">
                <span></span>
                <h4>or</h4>
                <span></span>
              </div>
              <h4 className="add-to-cart" onClick={() => {}}>
                login with Facebook
              </h4>
              <h4 className="add-to-cart" onClick={() => {}}>
                login with Google
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
