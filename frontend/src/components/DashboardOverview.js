import React from "react";

const DashboardOverview = ({ user, nSwitch, handler }) => {
  return (
    <>
      <p>
        Hello <strong>{user.name}</strong>! (not <strong>{user.name}</strong>?{" "}
        <button className="inline-logout-button" onClick={handler}>
          Log out
        </button>
        )
      </p>
      <p className="inline-dash-nav">
        From your account dashboard you can view your{" "}
        <span>
          <strong id="orders" onClick={nSwitch}>
            recent orders
          </strong>
        </span>
        , manage your{" "}
        <span>
          <strong id="addresses" onClick={nSwitch}>
            shipping and billing addresses
          </strong>
        </span>
        , and{" "}
        <span>
          <strong id="profile settings" onClick={nSwitch}>
            edit your password and account details
          </strong>
        </span>
        .
      </p>
    </>
  );
};

export default DashboardOverview;
