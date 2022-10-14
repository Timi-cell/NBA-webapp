import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="../images/logo.png" alt="logo" />
      </Link>
      <p id="teams-link">
        <Link to="/teams">Teams</Link>
      </p>
    </div>
  );
};

export default Header;
