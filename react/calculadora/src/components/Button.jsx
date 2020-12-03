import React from "react";
import "./Button.css";

const button = (props) => {
    /* Dentro de uma template string, estamos utilizando codigo javascript puro
     */
  
    let classes = "button ";
    classes += props.operation ? "operation" : "";
    classes += props.double ? "double" : "";
    classes += props.triple ? "triple" : "";
  
    return (
      <button
        /* e.target.innerHTML === props.label */
        onClick={(e) => props.click && props.click(props.label)}
        className={classes}
      >
        {props.label}
      </button>
    );
  };
  

export default button