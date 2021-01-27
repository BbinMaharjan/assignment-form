import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button
      className='btn'
      type={props.type || "button"}
      style={{ borderColor: props.borderColor }}>
      {" "}
      {props.title}
    </button>
  );
};

export default Button;
