import React from "react";

const DashboardController = ({ user, nSwitch, handler }) => {
  const navingation = [
    "dashboard",
    "orders",
    "addresses",
    "profile settings",
    "wishlist",
  ];

  return (
    <div className="controller">
      <div className="identity">
        <img className="avatar" src="/images/avatar.png" alt="" />
        <h2 className="username">{user.name}</h2>
      </div>
      <table className="navingation">
        <tbody>
          {navingation.map((act, index) => (
            <tr key={index}>
              <td>
                <button
                  className="navigation-item add-to-cart"
                  id={act}
                  onClick={nSwitch}
                >
                  {act}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="commands">
        <tbody>
          <tr>
            <td>
              <button
                className="command-item add-to-cart"
                id="logout"
                onClick={handler}
              >
                logout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardController;
