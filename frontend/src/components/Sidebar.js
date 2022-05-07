import React from "react";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ heading, collection, type }) => {
  return (
    <div className="sidebar">
      <h1 className="collection-heading">
        <span className="bar"></span>
        {`latest ${heading}`}
      </h1>
      <div className="sidebar-collection">
        {collection
          ? collection.length > 0
            ? collection.map((item) => (
                <SidebarItem
                  key={item._id}
                  id={item._id}
                  type={type}
                  image={item.coverImage}
                  heading={item.heading}
                />
              ))
            : ""
          : ""}
      </div>
    </div>
  );
};

export default Sidebar;
