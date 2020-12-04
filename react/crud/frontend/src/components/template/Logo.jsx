import "./Logo.css";
import logo from "../../assets/images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const logoExport = (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);

export default logoExport;
