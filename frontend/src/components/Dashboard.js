import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { getUserDetails, logout } from "../actions/userActions";
import AddressCard from "./AddressCard";
import ProfileSettings from "./ProfileSettings";
import WishList from "./WishList";
import DashboardOverview from "./DashboardOverview";
import DashboardController from "./DashboardController";

const billingAddress = {
  name: "Mahmoud Ali",
  street: "Next to 8 Abdel-Qader El-Gheriany, Moharam Bek.",
  city: "Alexandria",
  country: "Egypt",
  mobile: "00201222222222",
  email: "billing@test.com",
};

const shippingAddress = {
  name: "Sarah Ali",
  street: "6 Ahmed Attiya, Engineering District, New Hadara.",
  city: "Alexandria",
  country: "Egypt",
  mobile: "00201555555555",
  email: "shipping@test.com",
};

const Dashboard = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { wishList } = cart;

  const [navAction, setNavAction] = useState("dashboard");
  const [toggled, setToggled] = useState(false);

  const navSwitch = (e) => {
    if (navAction !== e.target.id) {
      setNavAction(e.target.id);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (userInfo && !toggled) {
      dispatch(getUserDetails("profile"));
      setToggled(true);
    }
  });

  return (
    <div className="dashboard">
      {userInfo && (
        <DashboardController
          user={userInfo}
          nSwitch={navSwitch}
          handler={logoutHandler}
        />
      )}
      <div className="details">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message body={error} />
        ) : (
          <>
            <h2 className="collection-heading">
              <span className="bar"></span>
              {navAction === "dashboard"
                ? "overview"
                : navAction === "orders"
                ? "your orders"
                : navAction === "addresses"
                ? "your addresses"
                : navAction === "profile settings"
                ? "profile settings"
                : navAction === "wishlist" && "wishlist"}
            </h2>

            {navAction === "dashboard" ? (
              <DashboardOverview
                user={userInfo}
                nSwitch={navSwitch}
                handler={logoutHandler}
              />
            ) : navAction === "orders" ? (
              <>
                {userInfo.orders ? (
                  <>
                    <h3>orders</h3>
                    {userInfo.orders}
                  </>
                ) : (
                  <>
                    <p>No order has been made yet.</p>
                  </>
                )}
              </>
            ) : navAction === "addresses" ? (
              <>
                <p>
                  The following addresses will be used on the checkout page by
                  default.
                </p>

                <div className="addresses">
                  <AddressCard address={billingAddress} type="billing" />
                  <AddressCard address={shippingAddress} type="shipping" />
                </div>
              </>
            ) : navAction === "profile settings" ? (
              <ProfileSettings />
            ) : (
              navAction === "wishlist" && (
                <>
                  {wishList && wishList.length > 0 ? (
                    <WishList wishlist={wishList} />
                  ) : (
                    <>
                      <p>No products were added to the wishlist.</p>
                    </>
                  )}
                </>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
