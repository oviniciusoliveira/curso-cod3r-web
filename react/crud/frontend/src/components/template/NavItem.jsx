import "./NavItem.css";
import React from "react";
import { Link } from "react-router-dom";

const navItemExport = (props) => (
  <Link to={`/${props.url}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.label}
  </Link>
);
export default navItemExport;
