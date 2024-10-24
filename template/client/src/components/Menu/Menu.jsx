import React from "react";
import "./Menu.scss"; 

const Menu = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      viewBox="0 0 24 24"
      fill="none"
      height={24}
      {...props}
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
    >
      <path
        d="M4 12H20"
        stroke={props.isHovered ? "#3AA39F" : "#17183B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-path"
      />
      <path
        d="M7 6H17"
        stroke={props.isHovered ? "#3AA39F" : "#17183B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-path"
      />
      <path
        d="M8 18H16"
        stroke={props.isHovered ? "#3AA39F" : "#17183B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-path"
      />
    </svg>
  );
};
export default Menu;
