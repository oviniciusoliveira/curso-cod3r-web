import "./NavItem.css";
import React from "react";

export default (props) => (
  <a href={`#/${props.url}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.label}
  </a>
);
