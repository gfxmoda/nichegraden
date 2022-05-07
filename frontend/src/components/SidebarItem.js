import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ image, heading, type, id }) => {
  return (
    <div className="sidebar-item">
      <img src={`/images/${image}`} alt="" />
      <Link to={`/${type}/${id}`}>{heading.substring(0, 40)}...</Link>
    </div>
  );
};

export default SidebarItem;
