import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

/*
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
TODO: CONTINUE USER EDIT SECTION
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
*/

const ProfileSettings = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const dobHandler = (e) => {
    setDob(e.target.value.toString());
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };
  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const confirmedPasswordHandler = (e) => {
    setConfirmedPassword(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitEditUserHandler = (e) => {
    e.preventDefault();
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message body={error} />
  ) : (
    user && (
      <>
        <form onSubmit={submitEditUserHandler} className="profile-settings">
          <div className="identity">
            <h3 className="collection-heading">
              <span className="bar"></span>Avatar
            </h3>
            <img className="avatar" src={`/images/avatar.png`} alt="" />
            <div>
              <button className="choose-avatar">choose file</button>
              <span>No file chosen</span>
            </div>
          </div>

          <h3 className="collection-heading">
            <span className="bar"></span>personal data
          </h3>

          <input
            type="text"
            placeholder="your name *"
            onChange={nameHandler}
            value={name}
            required
          />
          <input
            type="date"
            placeholder="your date of birth"
            onChange={dobHandler}
            value={dob}
          />
          <input
            type="number"
            placeholder="your mobile number *"
            onChange={mobileHandler}
            value={mobile}
            required
          />
          <input
            type="email"
            placeholder="your email address *"
            onChange={emailHandler}
            value={email}
            required
          />

          <h3 className="collection-heading">
            <span className="bar"></span>password change
          </h3>
          <p>
            Kindly leave the fields below blank if you don't any intention to
            change them
          </p>

          <input
            type="password"
            placeholder="your current password"
            onChange={passwordHandler}
            value={password}
          />
          <input
            type="password"
            placeholder="new password"
            onChange={newPasswordHandler}
            value={newPassword}
          />
          <input
            type="password"
            placeholder="confirm new password"
            onChange={confirmedPasswordHandler}
            value={confirmedPassword}
          />
          <button
            type="submit"
            className="add-to-cart"
            onClick={submitEditUserHandler}
          >
            save changes
          </button>
        </form>
      </>
    )
  );
};

export default ProfileSettings;

///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
// CONTINUE
