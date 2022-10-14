import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src="../images/logo.png" alt="logo" />
      </Link>
      <h2>&copy; National Basketball Association 2022</h2>
    </div>
  );
};

export default Footer;
