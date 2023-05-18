import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Movie App</div>

      <div className="user-image">
        <img src={user} alt="User" className="" />
      </div>
    </div>
  );
}

export default Header;
